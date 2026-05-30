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
          background: "#FAF7F2",
          color: "#1F1B17",
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
            color: "#6B6055",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#A8442C",
            }}
          />
          hiersoboris.fr
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <div
            style={{
              fontSize: 90,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            Vendre. Former.
          </div>
          <div
            style={{
              fontSize: 90,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            Et coder <span style={{ color: "#A8442C" }}>ce qui manque</span>
          </div>
          <div
            style={{
              fontSize: 90,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            entre les deux.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#1F1B17",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontWeight: 600 }}>Boris Hierso Alphandéry</div>
            <div style={{ color: "#6B6055", fontSize: 22 }}>
              Head of Sales freelance · Coach négo · Maker IA
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
