import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Boris Hierso Alphandéry · Head of Sales, coach négo, créateur d'outils IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0907",
          color: "#F4EFE6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#C9A24B",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#C9A24B",
            }}
          />
          hiersoboris.fr
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            Vendre. Structurer.
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 600,
              fontStyle: "italic",
              letterSpacing: -2,
              color: "#C9A24B",
            }}
          >
            Transmettre.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#F4EFE6",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontWeight: 600 }}>Boris Hierso Alphandéry</div>
            <div style={{ color: "#A89F8E", fontSize: 22 }}>
              Head of Sales freelance · Coach négo · Maker IA
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
