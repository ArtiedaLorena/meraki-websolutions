import { ImageResponse } from "next/og";

export const alt = "Meraki Web Solutions — desarrollo web en Bernal, Quilmes y Zona Sur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #0EA5E9 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            background: "#14B8A6",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          M
        </div>
        <div style={{ marginTop: 36, fontSize: 58, fontWeight: 700, letterSpacing: -1.5 }}>
          Meraki Web Solutions
        </div>
        <div style={{ marginTop: 16, fontSize: 26, color: "#F1F5F9", maxWidth: 880 }}>
          Desarrollo web en Bernal, Quilmes y Zona Sur
        </div>
      </div>
    ),
    size,
  );
}
