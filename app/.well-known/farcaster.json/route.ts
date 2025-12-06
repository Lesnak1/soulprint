import { NextResponse } from "next/server";

// Manifest with miniapp key and baseBuilder for Base.dev compatibility
const manifest = {
    "accountAssociation": {
        "header": "eyJmaWQiOjMwNTM2OSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDRhNmVBQWUxMTkyQkM4Mzg5OTE5ZDRBMmNFQjZCRjcxMkQyNTJGODMifQ",
        "payload": "eyJkb21haW4iOiJzb3VscHJpbnQtdGhyZWUudmVyY2VsLmFwcCJ9",
        "signature": "n+ebmqiyyEZatYAtKi9B9bsQfX5849CjeNNbr0wJiRkQe3yQDLBjP8dpJu0hY/g1mCW5AOCfci27RkaVMDgOSBw="
    },
    "miniapp": {
        "version": "1",
        "name": "SOULPRINT",
        "subtitle": "Your On-Chain DNA",
        "description": "Discover your unique blockchain identity. SOULPRINT analyzes your on-chain activity to create a unique digital DNA fingerprint.",
        "iconUrl": "https://soulprint-three.vercel.app/icon.png",
        "splashImageUrl": "https://soulprint-three.vercel.app/splash.png",
        "splashBackgroundColor": "#0A0A0F",
        "homeUrl": "https://soulprint-three.vercel.app",
        "webhookUrl": "https://soulprint-three.vercel.app/api/webhook",
        "primaryCategory": "social",
        "screenshotUrls": [
            "https://soulprint-three.vercel.app/screenshot.png"
        ],
        "heroImageUrl": "https://soulprint-three.vercel.app/hero.png",
        "tags": ["dna", "personality", "onchain", "base"],
        "tagline": "Discover Your Blockchain DNA",
        "ogTitle": "SOULPRINT - Your On-Chain DNA",
        "ogDescription": "Analyze your on-chain activity and discover your unique digital DNA.",
        "ogImageUrl": "https://soulprint-three.vercel.app/hero.png"
    },
    "baseBuilder": {
        "ownerAddress": "0x5583101e8f0DcbAA99B58b0f141858166FE622ce"
    }
};

export async function GET() {
    return NextResponse.json(manifest);
}
