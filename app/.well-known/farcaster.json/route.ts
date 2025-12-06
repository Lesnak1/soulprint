import { NextResponse } from "next/server";

// Exact manifest from Farcaster Developer Tools
const manifest = {
    "frame": {
        "name": "SOULPRINT",
        "version": "1",
        "iconUrl": "https://soulprint-three.vercel.app/icon.png",
        "homeUrl": "https://soulprint-three.vercel.app",
        "imageUrl": "https://soulprint-three.vercel.app/image.png",
        "splashImageUrl": "https://soulprint-three.vercel.app/splash.png",
        "splashBackgroundColor": "#0A0A0F",
        "webhookUrl": "https://soulprint-three.vercel.app/api/webhook",
        "primaryCategory": "social",
        "description": "Discover your unique blockchain identity. SOULPRINT analyzes your on-chain activity to create a unique digital DNA fingerprint. See your personality traits and rarity score.",
        "subtitle": "Your On-Chain DNA"
    },
    "accountAssociation": {
        "header": "eyJmaWQiOjMwNTM2OSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDRhNmVBQWUxMTkyQkM4Mzg5OTE5ZDRBMmNFQjZCRjcxMkQyNTJGODMifQ",
        "payload": "eyJkb21haW4iOiJzb3VscHJpbnQtdGhyZWUudmVyY2VsLmFwcCJ9",
        "signature": "n+ebmqiyyEZatYAtKi9B9bsQfX5849CjeNNbr0wJiRkQe3yQDLBjP8dpJu0hY/g1mCW5AOCfci27RkaVMDgOSBw="
    }
};

export async function GET() {
    return NextResponse.json(manifest);
}
