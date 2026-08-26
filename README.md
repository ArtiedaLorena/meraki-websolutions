# Meraki Web Solutions

Sitio promocional de [Meraki Web Solutions](https://www.instagram.com/meraki.responsivewebs/): páginas web accesibles, mobile first y SEO para negocios de Bernal y Zona Sur.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Producción (Vercel)

1. Importá este repositorio en [Vercel](https://vercel.com/new).
2. En Environment Variables definí:
   - `NEXT_PUBLIC_SITE_URL` — dominio canónico (sitemap, Open Graph y JSON-LD). Si no lo definís, se usa el dominio de producción de Vercel.
3. Deploy. El merge a `main` publica el sitio.

Build local:

```bash
npm run build
npm start
```
