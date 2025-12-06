import { NextRequest, NextResponse } from "next/server";

// Webhook types from Farcaster
interface WebhookEvent {
    event: string;
    data: {
        fid?: number;
        notificationDetails?: {
            url: string;
            token: string;
        };
    };
}

export async function POST(request: NextRequest) {
    try {
        const body: WebhookEvent = await request.json();

        console.log("Webhook received:", body.event);

        switch (body.event) {
            case "miniapp_added":
                console.log(`Miniapp added by FID: ${body.data.fid}`);
                // Handle user adding the miniapp
                break;

            case "miniapp_removed":
                console.log(`Miniapp removed by FID: ${body.data.fid}`);
                // Handle user removing the miniapp
                break;

            case "notifications_enabled":
                console.log(`Notifications enabled by FID: ${body.data.fid}`);
                // Store notification token for sending notifications later
                if (body.data.notificationDetails) {
                    // In production, save this to your database
                    console.log("Notification URL:", body.data.notificationDetails.url);
                }
                break;

            case "notifications_disabled":
                console.log(`Notifications disabled by FID: ${body.data.fid}`);
                // Remove stored notification token
                break;

            default:
                console.log("Unknown event:", body.event);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
