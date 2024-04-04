"use client";
import { useState } from "react";
import { NEXT_PUBLIC_URL } from "../config";

export default function GetURL() {
    const [urlPath, setUrlPath] = useState('');
    const [frameURL, setFrameURL] = useState('');
    const [invalidURL, setInvalidURL] = useState(false);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlPath(e.target.value);
        if (e.target.value.length > 0) {
            if (e.target.value.indexOf('#/round/') !== -1) {
                setFrameURL(`${NEXT_PUBLIC_URL}?url=${e.target.value.split('#/round/')[1]}`);
                setInvalidURL(false);
            } else {
                setFrameURL('');
                setInvalidURL(true);
            }
        } else {
            setFrameURL('');
            setInvalidURL(false);
        }
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Your gitcoin explorer URL"
                value={urlPath}
                onChange={handleUrlChange}
                style={{ minWidth: 300 }}
            />
            {frameURL && <h3>Frame URL</h3>}
            <p>{frameURL}</p>
            {invalidURL && <p>You URL is invalid</p>}
        </div>
    )
}