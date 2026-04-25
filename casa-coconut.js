/**
 * DATOS DEL PROYECTO — Casa Coconut
 * Duplica este archivo para cada nuevo proyecto y actualiza los valores.
 * Luego referencialo desde proyecto.html: <script src="casa-coconut.js"></script>
 */

window.PROJECT_DATA = {

  /* ── Meta & SEO ── */
  title:       "Casa Coconut",
  siteTitle:   "Casa Coconut — Imagine Construcciones",

  /* ── Hero ── */
  hero: {
    lines:     ["Casa", "Coconut"],
    bgImage:   "fotos/coconut-hero.jpg",       // ✅ Sin espacios, sin /
    tipologia: "Residencial privada",
  },

  /* ── Ficha técnica (máx. 6 items) ── */
  meta: [
    { label: "Ubicación",  value: "Guadalajara, Jalisco" },
    { label: "Año",        value: "2024"                 },
    { label: "Superficie", value: "480 m²"               },
    { label: "Tipología",  value: "Vivienda residencial" },
    { label: "Servicios",  value: "Proyecto ejecutivo, construcción y supervisión" },
    { label: "Estado",     value: "Completado"           },
  ],

  /* ── Descripción (array de párrafos) ── */
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],

  /* ── Galería ──
       Layouts disponibles por fila:
       "full"   → imagen a ancho completo
       "two"    → dos imágenes en columnas iguales
       "three"  → tres imágenes (la primera más ancha)
  ── */
  gallery: [
    // ✅ CORREGIDO: espacios → %20
    { layout: "full",  images: ["images/renders/casa%20coco%20nut%20villa/render%20interior%20casa%20coconut%204.jpg"] },
    { layout: "two",   images: [
        "images/renders/casa%20coco%20nut%20villa/render%20interior%20casa%20coconut%205.jpg",
        "images/renders/casa%20coco%20nut%20villa/render%20interior%20casa%20coconut%203.jpg",
    ]},
    { layout: "full",  images: ["images/renders/casa%20coco%20nut%20villa/render%20interior%20casa%20coconut%206.jpg"] },
  ],

  /* ── Navegación "siguiente proyecto" ── */
  nextProject: {
    label: "Casa Ruiz",
    href:  "",
  },

};