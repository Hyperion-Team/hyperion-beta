import { FrameMetadataType } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../config';

const initFrame = (state: { projectPath?: string, bannerImg?: string }): FrameMetadataType => ({
    buttons: [
        {
            label: 'Donate',
            action: "link",
            target: `https://explorer.gitcoin.co/#/round/${state.projectPath || '0'}`
        },
        // {
        //     label: 'Passport',
        // },
        {
            label: 'What is QF?',
        }
    ],
    image: {
        src: state.bannerImg ? `https://ipfs.io/ipfs/${state.bannerImg}` : `${NEXT_PUBLIC_URL}/default.jpg`,
        aspectRatio: '1.91:1'
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

const passportFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: 'See your passport',
            action: "link",
            target: `https://passport.gitcoin.co`
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/score.png`,
        aspectRatio: '1.91:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const qfFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: '<',
        },
        {
            label: '>',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/qf0.png`,
        aspectRatio: '1.91:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const qfFrame1: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: '<',
        },
        {
            label: '>',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/qf1.png`,
        aspectRatio: '1.91:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const qfFrame2: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: '<',
        },
        {
            label: '>',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/qf2.png`,
        aspectRatio: '1.91:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

export { initFrame, passportFrame, qfFrame, qfFrame1, qfFrame2 };