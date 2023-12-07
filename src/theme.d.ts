import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface Palette {
    white?: PaletteColor;
    gray?: PaletteColor;
  }

  interface PaletteOptions {
    white?: PaletteColorOptions;
    gray?: PaletteColorOptions;
  }

  interface PaletteColor {
    main?: string;
    darker?: string;
    light?: string;
  }

  interface SimplePaletteColorOptions {
    main?: string;
    darker?: string;
    light?: string;
  }
}
