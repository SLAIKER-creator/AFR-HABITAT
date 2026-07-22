import { config } from "../config";

// ============================================================================
// ThemeStyle — injecte le thème (couleurs + police) défini dans config.ts
// comme variables CSS globales (--color-primary, --font-heading, etc.).
//
// À installer UNE SEULE FOIS par site, dans app/layout.tsx :
//
//   import ThemeStyle from "../components/ThemeStyle";
//   ...
//   <body>
//     <ThemeStyle />
//     {children}
//   </body>
//
// Une fois en place, plus jamais besoin d'y retoucher : tout changement de
// couleur ou de police pour un nouveau client se fait uniquement dans
// config.ts (section `theme`).
// ============================================================================

export default function ThemeStyle() {
  const { colors, fonts } = config.theme;

  return (
    <style>{`
      ${fonts.googleFontsUrl ? `@import url('${fonts.googleFontsUrl}');` : ""}

      :root {
        --color-primary: ${colors.primary};
        --color-primary-hover: ${colors.primaryHover};
        --color-primary-light: ${colors.primaryLight};
        --color-primary-dark: ${colors.primaryDark};
        --font-heading: ${fonts.heading};
        --font-body: ${fonts.body};
      }

      body {
        font-family: var(--font-body);
      }

      h1, h2, h3 {
        font-family: var(--font-heading);
      }
    `}</style>
  );
}
