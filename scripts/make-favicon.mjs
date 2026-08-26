import sharp from "sharp";

const cropped = await sharp("public/brand/logo-meraki.jpg")
  .extract({ left: 248, top: 290, width: 528, height: 320 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.from(cropped.data);
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  const bri = (r + g + b) / 3;
  if (bri > 235 || (sat < 22 && bri > 200)) {
    out[i + 3] = 0;
  } else if (bri > 215 && sat < 40) {
    out[i + 3] = Math.max(0, Math.min(255, Math.round((235 - bri) * 10)));
  }
}

const mark = await sharp(out, {
  raw: {
    width: cropped.info.width,
    height: cropped.info.height,
    channels: 4,
  },
})
  .png()
  .trim({ threshold: 10 })
  .toBuffer();

async function makeIcon(size, path) {
  const circle = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#ffffff"/></svg>`,
  );
  const inner = Math.round(size * 0.68);
  const m = await sharp(mark)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: circle, gravity: "centre" },
      { input: m, gravity: "centre" },
    ])
    .png()
    .toFile(path);
}

await makeIcon(32, "src/app/icon.png");
await makeIcon(180, "src/app/apple-icon.png");
await makeIcon(512, "public/brand/icon-512.png");
await sharp(mark).png().toFile("public/brand/logo-mark.png");
console.log("done");
