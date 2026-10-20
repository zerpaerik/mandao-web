# Mandaíto · web pública

Sitio público de **Mandaíto** (mandaito.com.ve): delivery y mandados en San Juan de los Morros, Guárico.
Construido con Next.js 16 (App Router), React 19, Tailwind CSS 4 y [Motion](https://motion.dev) para las animaciones.

## Arrancar

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # compila para producción
pnpm start      # sirve la compilación
pnpm lint       # ESLint
```

## Estructura

```
src/
├── app/                    Rutas (App Router)
│   ├── layout.tsx          Fuente Nunito, metadatos, header y footer
│   ├── page.tsx            Landing: hero, franja promo, cómo funciona, cifras del piloto, categorías, comercios, cobertura, preguntas, CTA
│   ├── comercios/          Página y formulario para comercios
│   ├── riders/             Página y formulario para riders
│   ├── terminos/ privacidad/   Borradores legales (pendientes de abogado)
│   ├── sitemap.ts robots.ts
│   └── globals.css         Tema de marca (colores, fuente, sombras, animaciones) en @theme
├── actions/
│   └── leads.ts            Server action que valida y registra solicitudes de comercios y riders
├── components/
│   ├── layout/             SiteHeader (sticky, blur al hacer scroll, menú móvil) y SiteFooter
│   ├── sections/           Una sección de página por archivo
│   ├── forms/              LeadForm (useActionState + server action)
│   ├── illustrations/      Silueta de Los Morros (respaldo cuando no hay foto)
│   └── ui/                 Button, Container, Logo, PhoneFrame, SectionHeading, Reveal/Stagger, Counter
├── content/
│   └── landing.ts          Todos los textos de la landing en un solo lugar
└── lib/
    ├── site.ts             Marca, contacto, enlaces, parámetros del piloto
    └── utils.ts            cn(), formatUsd()
```

Regla simple: **los textos viven en `src/content`, los datos de la marca en `src/lib/site.ts`**. Los componentes no llevan texto ni números fijos.

Interruptores en `src/content/landing.ts`: `pilotStats.enabled` muestra la fila de cifras reales del piloto; `sponsoredSpot.enabled` muestra la tarjeta de espacio patrocinado. Ambos arrancan en `false`.

Las capturas de la app en `public/images/screens/` (inicio, pago, seguimiento) se generan desde el lienzo de diseño; al cambiar el diseño, regenerarlas y reemplazarlas.

## Pendientes antes de publicar

| Qué | Dónde |
| --- | --- |
| Número real de WhatsApp | `src/lib/site.ts` → `whatsapp` |
| Enlace a Google Play | `src/lib/site.ts` → `app.android` |
| Guardar los leads | `src/actions/leads.ts`: hoy valida y registra en consola; conectar a Google Sheets, Notion o el admin de Mandaíto |
| Textos legales | `src/app/terminos` y `src/app/privacidad` son borradores |
| RIF en el footer | `src/components/layout/SiteFooter.tsx` |
| Imagen Open Graph | agregar `src/app/opengraph-image.tsx` |

## Identidad

| Rol | Color |
| --- | --- |
| Naranja llanero | `#E8611A` |
| Verde morro | `#1F6B4F` |
| Crema | `#FFF3E8` |
| Carbón | `#2B2724` |

Tipografía: Nunito (500, 700, 800, 900) vía `next/font/google`.
