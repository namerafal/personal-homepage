const colorNames = {
  backgroundLm: "#FBFBFE",
  black: "#252525",
  midDark: "#3636365c",
  semiDark: "#363636",
  doveGray: "#6E6E6E",
  white: "#FFFFFF",
  textSecondary: "#6E7E91",
  mainBlueLm: "#0366D6",
  mainBlueDm: "#2188FF",
  focusBlueLm: "#8CC2FF",
  focusBlueDm: "#6D93BE",
  semiGrey: "#D1D5DA",
  lighterGrey: "#D1D5DA",
  lightGrey: "#E5E5E5",

  ironTransparent: "rgba(209, 213, 218, 0.3)",
  hoverLightBlueLM: "rgba(3, 102, 214, 0.2)",
  hoverLightBlueDM: "rgba(3, 102, 214, 0.4)",
  caledorSky: "rgba(3, 102, 214, 0.4)",
  hoverLm: "rgb(166 160 160 / 17%);",
  hoverDm: "rgb(166 160 160 / 17%);",

  buttonShadowLm:
    "inset 0px 18px 8px 0px rgb(9 10 51 / 2%), 0px 5px 6px 0px rgb(11 11 12 / 8%)",
  buttonShadowDm:
    "inset 0px 17px 10px 0px rgb(27 26 26 / 29%), -1px 17px 17px 0px rgb(117 117 134 / 9%)",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },

  boxShadow:
    " 0px -2px 20px 0px rgb(9 10 51 / 0.03), 1px 14px 17px 0px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.mainBlueLm,
    textPrimary: colorNames.black,
    site: {
      background: colorNames.backgroundLm,
      text: colorNames.textSecondary,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.focusBlueLm,
    },
    tileBackground: colorNames.white,
    headerLine: colorNames.lightGrey,
    imgBorder: colorNames.lighterGrey,
    underlineLink: colorNames.hoverLightBlueLM,
    rightsBackground: colorNames.lightGrey,
    tile: {
      border: colorNames.ironTransparent,
      borderHover: colorNames.hoverLightBlueLM,
      header: colorNames.mainBlueLm,
    },
    themeSwitch: {
      background: colorNames.lightGrey,
      icon: colorNames.white,
    },
    toggleButton: {
      hoverColor: colorNames.hoverLm,
      activeShadow: colorNames.buttonShadowLm,
      background: colorNames.ironTransparent,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.mainBlueDm,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.black,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.focusBlueDm,
    },
    tileBackground: colorNames.semiDark,
    headerLine: colorNames.semiGrey,
    imgBorder: colorNames.semiGrey,
    underlineLink: colorNames.caledorSky,
    rightsBackground: colorNames.semiDark,
    tile: {
      border: colorNames.semiGrey,
      borderHover: colorNames.hoverLightBlueDM,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.black,
    },
    toggleButton: {
      hoverColor: colorNames.hoverDm,
      activeShadow: colorNames.buttonShadowDm,
      background: colorNames.midDark,
    },
  },
};
