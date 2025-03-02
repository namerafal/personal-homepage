
   const colorNames = {
        backgroundLm: "#FBFBFE",
        black: "#252525",
        semiDark: "#363636",
        doveGray:"#6E6E6E",
        white: "#FFFFFF",
        textSecondary: "#6E7E91",
        mainBlueLm: "#0366D6",
        mainBlueDm: "#2188FF",
        focusBlueLm: "#8CC2FF",
        focusBlueDm: "#6D93BE",
        hoverLightBlue: "#0366D6",
        semiGrey: "#D1D5DA",
        lighterGrey: "#D1D5DA",
        lightGrey: "#E5E5E5",       

        ironTransparent: "rgba(209, 213, 218, 0.3)",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },

    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.2), 0px 16px 58px rgba(9, 10, 51, 0.03)",
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
        tile: {
            border: colorNames.lighterGrey,
            borderHover: colorNames.hoverLightBlue,
            header: colorNames.mainBlueLm,
        },
        themeSwitch: {
            background: colorNames.lightGrey,
            icon: colorNames.white,
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
        tile: {
            border: colorNames.semiGrey,
            borderHover: colorNames.hoverLightBlue,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.black,
        },
    },
};