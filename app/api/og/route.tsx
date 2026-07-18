import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const fontsDir = path.join(
  process.cwd(),
  "node_modules",
  "geist",
  "dist",
  "fonts",
  "geist-sans",
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "Blog Post";
    const isLong = title.length > 70;

    const geistMedium = fs.readFileSync(path.join(fontsDir, "Geist-Medium.ttf"));
    const geistSemiBold = fs.readFileSync(
      path.join(fontsDir, "Geist-SemiBold.ttf"),
    );

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            backgroundColor: "#F7F7F8",
            fontFamily: "Geist",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -180,
              top: -180,
              width: 560,
              height: 560,
              borderRadius: 9999,
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(108,71,255,0.16) 0%, rgba(108,71,255,0) 70%)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 1200,
              height: 630,
              padding: "72px 80px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <svg width="56" height="56" viewBox="0 0 32 32">
                <path
                  d="M25.5 9.5A11 11 0 1 0 25.5 22.5"
                  fill="none"
                  stroke="#3C3C3F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="25.5" cy="16" r="3" fill="#6C47FF" />
              </svg>
              <div
                style={{
                  fontSize: 24,
                  lineHeight: "30px",
                  fontWeight: 500,
                  color: "#5E5F6E",
                }}
              >
                chintan.design
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  fontSize: isLong ? 56 : 72,
                  lineHeight: isLong ? "66px" : "80px",
                  letterSpacing: "-0.03em",
                  maxWidth: 940,
                  fontWeight: 600,
                  color: "#0F172A",
                }}
              >
                {title}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 34,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "#6C47FF",
                  }}
                />
                <div
                  style={{
                    fontSize: 22,
                    lineHeight: "28px",
                    fontWeight: 500,
                    color: "#5E5F6E",
                  }}
                >
                  Chintan Savaliya — Web Developer & Product Builder
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Geist", data: geistMedium, weight: 500 },
          { name: "Geist", data: geistSemiBold, weight: 600 },
        ],
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
