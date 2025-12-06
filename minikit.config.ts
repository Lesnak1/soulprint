// IMPORTANT: Update ROOT_URL after deploying to Vercel
const ROOT_URL = process.env.NEXT_PUBLIC_URL || "https://soulprint-three.vercel.app";

export const minikitConfig = {
    accountAssociation: {
        "header": "eyJmaWQiOjMwNTM2OSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDRhNmVBQWUxMTkyQkM4Mzg5OTE5ZDRBMmNFQjZCRjcxMkQyNTJGODMifQ",
        "payload": "eyJkb21haW4iOiJzb3VscHJpbnQtdGhyZWUudmVyY2VsLmFwcCJ9",
        "signature": "n+ebmqiyyEZatYAtKi9B9bsQfX5849CjeNNbr0wJiRkQe3yQDLBjP8dpJu0hY/g1mCW5AOCfci27RkaVMDgOSBw="
    },
    miniapp: {
        version: "1",
        name: "SOULPRINT",
        iconUrl: `${ROOT_URL}/icon.png`,
        homeUrl: ROOT_URL,
        imageUrl: `${ROOT_URL}/hero.png`,
        buttonTitle: "Analyze My DNA",
        splashImageUrl: `${ROOT_URL}/splash.png`,
        splashBackgroundColor: "#0A0A0F",
        webhookUrl: `${ROOT_URL}/api/webhook`,
        subtitle: "Your On-Chain DNA",
        description: "Discover your unique blockchain identity. SOULPRINT analyzes your on-chain activity to create a unique digital DNA fingerprint.",
        primaryCategory: "social",
        screenshotUrls: [
            `${ROOT_URL}/screenshot.png`
        ],
        heroImageUrl: `${ROOT_URL}/hero.png`,
        tags: ["identity", "nft", "dna", "personality", "onchain", "base"],
        tagline: "Discover Your Blockchain DNA",
        ogTitle: "SOULPRINT - Your On-Chain DNA",
        ogDescription: "What's your blockchain personality? Analyze your on-chain activity and discover your unique digital DNA.",
        ogImageUrl: `${ROOT_URL}/hero.png`,
    },
} as const;

export default minikitConfig;
