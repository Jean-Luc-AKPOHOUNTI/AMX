export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  assets: {
    background: string;
    logo?: string;
  };
  fonts: {
    primary: string;
  };
}
