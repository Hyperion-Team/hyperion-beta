import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata, ResolvingMetadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { initFrame } from './utils/framesMetadata';

const apolloClient = new ApolloClient({
	uri: "https://grants-stack-indexer-v2.gitcoin.co/graphql",
	cache: new InMemoryCache(),
});

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ searchParams }: Props,
	_parent: ResolvingMetadata
): Promise<Metadata> {
	let newState: { projectPath?: string, bannerImg?: string } = {};

	if (searchParams.url !== undefined) {
		const vars = (searchParams.url as string).split('/');
		const { data } = await apolloClient.query({
			query: gql`
			query {
				application(
					chainId: ${parseInt(vars[0])}
					id: "${vars[2]}"
					roundId: "${vars[1]}"
				) {
					id
					metadata
				}
			}
		  `,
		});

		newState = {
			projectPath: searchParams.url as string || '',
			bannerImg: data?.application?.metadata?.application?.project?.bannerImg
		}
	}


	return {
		title: 'Cast and Donate',
		description: 'Farcaster Frames for GitcoinGrants',
		openGraph: {
			title: 'Cast and Donate',
			description: 'Farcaster Frames for GitcoinGrants',
			images: [newState.bannerImg || `${NEXT_PUBLIC_URL}/default.jpg`],
		},
		other: {
			...getFrameMetadata(
				{
					...initFrame(newState),
					state: newState
				}
			),
		},
	}
}

export default function HomePage() {
	return <div>Cast and Donate</div>
}