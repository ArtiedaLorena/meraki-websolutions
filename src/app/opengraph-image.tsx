import { ImageResponse } from "next/og";

export const alt = "Meraki Web Solutions — páginas web accesibles, listas en pocos días";
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
          background: "linear-gradient(135deg, #0a1530 0%, #122047 42%, #163a86 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 84,
            height: 84,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1a4fad, #14c8c4)",
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          M
        </div>
        <div style={{ marginTop: 36, fontSize: 64, fontWeight: 700, letterSpacing: -1.5 }}>
          Meraki Web Solutions
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#3ee0d8", maxWidth: 820 }}>
          Páginas web accesibles, listas en pocos días.
        </div>
      </div>
    ),
    size,
  );
}
