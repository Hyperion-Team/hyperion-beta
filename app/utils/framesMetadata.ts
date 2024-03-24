import { FrameMetadataType } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../config';

const initFrame = (state: { projectPath?: string, bannerImg?: string }): FrameMetadataType => ({
    buttons: [
        {
            label: 'Vonate',
            action: "link",
            target: `https://explorer.gitcoin.co/#/round/${state.projectPath || '0'}`
        },
        {
            label: 'Passport',
        },
        {
            label: 'What is QF?',
        },
        {
            action: 'tx',
            label: 'Mint',
            target: `${NEXT_PUBLIC_URL}/api/tx`,
            postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
        },
    ],
    image: {
        src: state.bannerImg ? `https://ipfs.io/ipfs/${state.bannerImg}` : `${NEXT_PUBLIC_URL}/default.jpg`,
        aspectRatio: '1.91:1'
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

const projectFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/park-2.png`,
        aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const passportFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/park-3.png`,
        aspectRatio: '1:1',
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

export { initFrame, projectFrame, passportFrame, qfFrame, qfFrame1 };