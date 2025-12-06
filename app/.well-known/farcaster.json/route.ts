import { NextResponse } from "next/server";
import { minikitConfig } from "@/minikit.config";

export async function GET() {
    // Farcaster expects 'frame' key, not 'miniapp'
    const manifest = {
        accountAssociation: minikitConfig.accountAssociation,
        frame: minikitConfig.miniapp,
    };

    return NextResponse.json(manifest);
}
