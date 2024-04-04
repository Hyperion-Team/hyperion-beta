import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { initFrame, passportFrame, qfFrame, qfFrame1, qfFrame2 } from '../../utils/framesMetadata';
import { NEXT_IS_PROD } from '../../config';


const totalQFPages = 3;

function getNewPageId(prevPage: number, buttonIndex: number) {
	// starts on 29 because of indexes
	const qfMaxIndex = 29 + totalQFPages;
	if (prevPage === 0) {
		return buttonIndex * 10;
	}
	else if (buttonIndex === 1) {
		return 0;
	}
	else if (prevPage >= 30 && prevPage <= qfMaxIndex) {
		if (buttonIndex === 3) {
			return prevPage + 1 <= qfMaxIndex ? prevPage +1 : qfMaxIndex;
		}
		return prevPage - 1 >= 30 ? prevPage - 1 : 30;
	}
}

function renderFrameMetadata(state: any, page: number) {
	switch (page) {
		case 0:
			return initFrame(state);
		// case 20:
		// 	return passportFrame;
		case 20:
			return qfFrame;
		case 21:
			return qfFrame1;
		case 22:
			return qfFrame2;
		default:
			return initFrame(state);
	}

}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	const body: FrameRequest = await req.json();
	const { isValid, message } = await getFrameMessage(body, { allowFramegear: !NEXT_IS_PROD });
	// start in 1
	const buttonIndex = body.untrustedData.buttonIndex;

	if (!isValid) {
		return new NextResponse('Message not valid', { status: 500 });
	}

	let state = {
		page: getNewPageId(0, buttonIndex),
		projectPath: '',
		bannerImg: '',
	};
	try {
		state = JSON.parse(decodeURIComponent(message.state?.serialized));
		state = {
			...state,
			page: getNewPageId(state?.page|| 0, buttonIndex),
		};
	} catch (e) {
		console.error(e);
	}

	return new NextResponse(
		getFrameHtmlResponse({
			...renderFrameMetadata(state, state?.page || 0),
			state,
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
