const fontSize = {
    xs: "10px",
    s: "clamp(0.75rem,1.5vmax,.8rem)",
    m: "clamp(0.75rem,1.5vmax,.8rem)",
    l: "clamp(0.75rem,1.5vmax,.8rem)",
    xl: "clamp(0.75rem,1.5vmax,.8rem)",
    xxl: "clamp(0.75rem,1.5vmax,.8rem)",
    footerIcon: "clamp(0.75rem,1.5vmax,.8rem)",
}

const controls = {
    color: "white",
    fontSizeSmall: "2rem",
    opacity: ".8",
    transition: "1.2s",
    hoverColor: "black",
    hoverOpacity: ".5",
    fontSize: "3.3rem",
}


const transitions = {
    primary: "all .4s ease-in-out",
}

const textStyle = {
    textFamily: "'Ubuntu', sans-serif",
    letterSpacing: "0.1rem",
}

const border = {
    primary: "20px",
    oval: "50px",
    sharp: "0px",
}

export const themeStyleDark = {
    fontSize,
    transitions,
    controls,
    textStyle,
    border,

    colors: {
        primary: "#1409a0", /* blue */
        primaryLight: "#8C98FF",
        secondary: "#D4D4D4", /* light */
        secondaryLight: "#d4d4d01f", /* light */
        third: "#000", /* dark */
        heroBgThird: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.35) 15%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0.35) 85%, rgba(255,255,255,1) 100%)",
        heroBgSecondary: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,1) 100%);",

        thirdLight: "#00000075",

        bottomNav: "rgba(0, 0, 0, .6)",


        fourth: "#636363",
        fifth: "#ffffff",

        hslaWhiteBg: "red", /* hsla(0, 0%, 0%, 0.04) */

        /* globals */

        bodyFont: "hsla(0, 0%, 0%, 0.8)",
        bodyFontDark: "#fff",

        bodyBg: "#fff",
        bodyBgDark: "#030303",

        hr: "hsla(0, 0%, 0%, 0.2)",


        markBg: "#ff0",
        mark: "#000",




        primaryColor: "#fff",
        secondaryColor: "#237500",
        thirdColor: "#000000",
        fourthColor: "#090909",
        hoverLinks: "orange",

        /* Button */



        /* Hero */

        heroBtnsLink: "black",
        heroBtnsBg: "rgba(255,255,255,0.6)",

        heroLogoSubtitle: "black",
        heroLogoBrandName: "black",
        heroLogoBg: "#E3E3E3",


        footerBg: "#AAA",
        footerLine: "#090909",
        footerIcon: "#090909",
        footerIconHover: "#fff",
        footerLink: "black",
        footerLinkHover: "#fff",
        footerInfo: "#090909",
        footerInfoHover: "#fff",

        mainNavBg: "transparent",
        mainNavFont: "white",
        mainNavFontHover: "#090909",

        /* Menu mobile */
        burgerOpen: "silver",
        burgerClose: "white",

        mobileNavLinks: "black",
        mobileNavBg: "#bbbbbb6e",
        mobileNavLinksHover: "#2f8a00",

        navBg: "rgba(255,255,255,0.4)",
        openedNavBg: "rgba(255,255,255,1)",
        mobileLinks: "red",
        mobileLinksHover: "orange",


        /* Transport page */

        transportSpan: "orange",
        transportSpanFS: "20px",

        transportP: "black",
        transportPFS: "16px",

        transportH3: "#868686",
        transportH3FS: "24px",

        transportSectionBg: "rgba(255,255,255,.6)",

        /* Single Item Page */

        offerItemsBoxBg: "rgba(255,255,255,.6)",

        offerItemsBoxH6: "orange",
        offerItemsBoxH6FS: "20px",

        offerItemsBoxtP: "black",
        offerItemsBoxPFS: "16px",

        offerItemsBoxH3: "#868686",
        offerItemsBoxH3FS: "24px",


        /* Section Content Box */

        sectionContentBoxColor: "black",
        sectionContentBoxBg: "rgba(255,255,255,.6)",
        sectionContentBoxUnderline: "#bf4f01",
        sectionContentBoxUnderlineHover: "#fb6c08",
        sectionContentBoxIcon: "#fb6c08",
        sectionContentBoxLink: "black",
        sectionContentBoxLinkBg: "#1d1d1d3b",
        sectionContentBoxMapLink: "black",

        sectionContentBoxSpanFSsmall: "14px",
        sectionContentBoxSpan: "orange",
        sectionContentBoxSpanFS: "20px",

        sectionContentBoxPFSsmall: "12px",
        sectionContentBoxP: "black",
        sectionContentBoxPFS: "16px",

        sectionContentBoxH3FS: "18px",
        sectionContentBoxH3: "#868686",
        sectionContentBoxH3FS: "24px",

        sectionContentBoxLiFSsmall: "12px",
        sectionContentBoxLiFS: "14px",

        /* Contact Icons Box */

        contactIconsBoxAfter: "green",
        contactIconsBoxAfterHover: "orange",

        /* Content Wrapper */

        sectionContentWrapperH3FSsmall: "16px",
        sectionContentWrapperH3FS: "18px",

        sectionContentWrapperColor: "#868686",

        /* Customed Content Wrapper */

        customedSectionH3: "#868686",
        customedSectionH3FS: "24px",

        customedSectionUnderline: "#bf4f01",
        customedSectionUnderlineHover: "#fb6c08",

        contactIconsIcon: "#fb6c08",
        contactIconsLink: "black",
        contactIconsLinkBg: "#dcdcdc73",

        /* Map Component */

        mapLink: "black",

        /* About Section */

        /*     aboutSectionColor: "black",
            aboutSectionBg: "rgba(255,255,255,.6)",
            aboutSectionUnderline: "#bf4f01",
            aboutSectionUnderlineHover: "#fb6c08",
            aboutSectionIcon: "#fb6c08",
            aboutSectionLink: "black",
            aboutSectionLinkBg: "#1d1d1d3b",
            aboutSectionMapLink: "black",
        
            aboutSectionSpan: "orange",
            aboutSectionSpanFS: "20px",
        
            aboutSectionP: "black",
            aboutSectionPFS: "16px",
        
            aboutSectionH3: "#868686",
            aboutSectionH3FS: "24px",
        
            aboutSectionLiFS: "14px", */


        /* Offer Slider */

        sliderContent: "#282936",
        sliderBtnColor: "#fff",
        sliderBtnColor: "#868686",

        mainWhite: "#f2f2f2",
        mainGrey: "silver",
        mainOrange: "#090909;",

        backgroundColor: "#E3E3E3",


        white: "#fff",
        lightCreamy: "#fff9f8",
        creamy: "#ffe5d4",
        black: "#000",
        fullBlack: "#020a13",
        midBlack: "#2b2b2d",
        carrotOrange: "#ff6600",
        darkOrange: "#f05d05",
        graphite: "#434343",
        gray: "#9f9f9f",
        lightGray: "#f1f2f3",
        darkGray: "#797979",
        brown: "#3e1f02",

        /* Interactions */
        scrollBtn: "orange",
        scrollBtnHover: "black",
    },


    textStyle: {
        textFamily: "'Ubuntu', sans-serif",


        letterSpacing: "0.1rem",
    },


    btn: {
        borderStyle: "solid",
        borderSize: "4px",
        letterSpacing: "5px",
    },

    fontColor: {
        fontPrimary: "black",
        fontSecondary: "white",
        fontThird: "blue",
    },

    /*     fontSize: {
            footerIcon: "26px",
            footerLink: "12px",
            footerInfo: "10px",
            footerLogoBrandName: "36px",
            footerLogoIcon: "76px",
        }, */

    fontWeight: {
        lxx: 900,
        lx: 800,
        l: 700,
        m: 600,
    },
    padding: {
        s: "5px",
        m: "10px",
        l: "20px",
        xl: "40px",
    },
    lineHeight: {
        s: "1em",
        m: "1.4em",
        l: "1.7em",
        xl: "2em",
    },
    /*     @media (min-width: ${({ theme }) => theme.device.m}) {
            width: 100%;
            margin: 0;
          } */
    device: {
        s: "576px",
        m: "768px",
        l: "992px",
        xl: "1200px",
        xxl: "1400px",
    },

    nav: {
        defaultBg: "white",
        scrollBg: "rgba(255,255,255,0.5)",
        burgerClose: "black",
        burgerOpen: "yellow",
    }
};





export const themeStyleLight = {
    fontSize,
    transitions,
    controls,
    textStyle,
    border,

    /* color: ${({ theme }) => theme.colors.mapLink};  */
    light: {
        colors: {
            primary: "#1409a0", /* blue */
            secondary: "#D4D4D4", /* dark */
            third: "#000", /* light */
        }
    },
    dark: {
        colors: {
            primary: "#1409a0", /* blue */
            secondary: "#000", /* dark */
            third: "#D4D4D4", /* light */
        }
    },
    colors: {
        primary: "#8C98FF", /* blue */
        primaryLight: "#1409a0",
        secondary: "#000", /* dark */
        secondaryLight: "#00000075", /* light */
        third: "#D4D4D4", /* dark */
        thirdLight: "#d4d4d01f",
        bottomNav: "rgba(255, 255, 255, .6)",

        heroBgSecondary: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.35) 15%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0.35) 85%, rgba(255,255,255,1) 100%)",
        heroBgThird: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,1) 100%);",


        fourth: "#636363",
        fifth: "#ffffff",

        hslaWhiteBg: "red", /* hsla(0, 0%, 0%, 0.04) */

        /* globals */

        bodyFont: "hsla(0, 0%, 0%, 0.8)",
        bodyFontDark: "#fff",

        bodyBg: "#fff",
        bodyBgDark: "#030303",

        hr: "hsla(0, 0%, 0%, 0.2)",


        markBg: "#ff0",
        mark: "#000",




        primaryColor: "#fff",
        secondaryColor: "#237500",
        thirdColor: "#000000",
        fourthColor: "#090909",
        hoverLinks: "orange",

        /* Button */



        /* Hero */

        heroBtnsLink: "black",
        heroBtnsBg: "rgba(255,255,255,0.6)",

        heroLogoSubtitle: "black",
        heroLogoBrandName: "black",
        heroLogoBg: "#E3E3E3",


        footerBg: "#AAA",
        footerLine: "#090909",
        footerIcon: "#090909",
        footerIconHover: "#fff",
        footerLink: "black",
        footerLinkHover: "#fff",
        footerInfo: "#090909",
        footerInfoHover: "#fff",

        mainNavBg: "transparent",
        mainNavFont: "white",
        mainNavFontHover: "#090909",

        /* Menu mobile */
        burgerOpen: "silver",
        burgerClose: "white",

        mobileNavLinks: "black",
        mobileNavBg: "#bbbbbb6e",
        mobileNavLinksHover: "#2f8a00",

        navBg: "rgba(255,255,255,0.4)",
        openedNavBg: "rgba(255,255,255,1)",
        mobileLinks: "red",
        mobileLinksHover: "orange",


        /* Transport page */

        transportSpan: "orange",
        transportSpanFS: "20px",

        transportP: "black",
        transportPFS: "16px",

        transportH3: "#868686",
        transportH3FS: "24px",

        transportSectionBg: "rgba(255,255,255,.6)",

        /* Single Item Page */

        offerItemsBoxBg: "rgba(255,255,255,.6)",

        offerItemsBoxH6: "orange",
        offerItemsBoxH6FS: "20px",

        offerItemsBoxtP: "black",
        offerItemsBoxPFS: "16px",

        offerItemsBoxH3: "#868686",
        offerItemsBoxH3FS: "24px",


        /* Section Content Box */

        sectionContentBoxColor: "black",
        sectionContentBoxBg: "rgba(255,255,255,.6)",
        sectionContentBoxUnderline: "#bf4f01",
        sectionContentBoxUnderlineHover: "#fb6c08",
        sectionContentBoxIcon: "#fb6c08",
        sectionContentBoxLink: "black",
        sectionContentBoxLinkBg: "#1d1d1d3b",
        sectionContentBoxMapLink: "black",

        sectionContentBoxSpanFSsmall: "14px",
        sectionContentBoxSpan: "orange",
        sectionContentBoxSpanFS: "20px",

        sectionContentBoxPFSsmall: "12px",
        sectionContentBoxP: "black",
        sectionContentBoxPFS: "16px",

        sectionContentBoxH3FS: "18px",
        sectionContentBoxH3: "#868686",
        sectionContentBoxH3FS: "24px",

        sectionContentBoxLiFSsmall: "12px",
        sectionContentBoxLiFS: "14px",

        /* Contact Icons Box */

        contactIconsBoxAfter: "green",
        contactIconsBoxAfterHover: "orange",

        /* Content Wrapper */

        sectionContentWrapperH3FSsmall: "16px",
        sectionContentWrapperH3FS: "18px",

        sectionContentWrapperColor: "#868686",

        /* Customed Content Wrapper */

        customedSectionH3: "#868686",
        customedSectionH3FS: "24px",

        customedSectionUnderline: "#bf4f01",
        customedSectionUnderlineHover: "#fb6c08",

        contactIconsIcon: "#fb6c08",
        contactIconsLink: "black",
        contactIconsLinkBg: "#dcdcdc73",

        /* Map Component */

        mapLink: "black",

        /* About Section */

        /*     aboutSectionColor: "black",
            aboutSectionBg: "rgba(255,255,255,.6)",
            aboutSectionUnderline: "#bf4f01",
            aboutSectionUnderlineHover: "#fb6c08",
            aboutSectionIcon: "#fb6c08",
            aboutSectionLink: "black",
            aboutSectionLinkBg: "#1d1d1d3b",
            aboutSectionMapLink: "black",
        
            aboutSectionSpan: "orange",
            aboutSectionSpanFS: "20px",
        
            aboutSectionP: "black",
            aboutSectionPFS: "16px",
        
            aboutSectionH3: "#868686",
            aboutSectionH3FS: "24px",
        
            aboutSectionLiFS: "14px", */


        /* Offer Slider */

        sliderContent: "#282936",
        sliderBtnColor: "#fff",
        sliderBtnColor: "#868686",

        mainWhite: "#f2f2f2",
        mainGrey: "silver",
        mainOrange: "#090909;",

        backgroundColor: "#E3E3E3",


        white: "#fff",
        lightCreamy: "#fff9f8",
        creamy: "#ffe5d4",
        black: "#000",
        fullBlack: "#020a13",
        midBlack: "#2b2b2d",
        carrotOrange: "#ff6600",
        darkOrange: "#f05d05",
        graphite: "#434343",
        gray: "#9f9f9f",
        lightGray: "#f1f2f3",
        darkGray: "#797979",
        brown: "#3e1f02",

        /* Interactions */
        scrollBtn: "orange",
        scrollBtnHover: "black",
    },


    textStyle: {
        textFamily: "'Ubuntu', sans-serif",


        letterSpacing: "0.1rem",
    },


    btn: {
        borderStyle: "solid",
        borderSize: "4px",
        letterSpacing: "5px",
    },

    fontColor: {
        fontPrimary: "black",
        fontSecondary: "white",
        fontThird: "blue",
    },

    fontSize: {
        footerIcon: "26px",
        footerLink: "12px",
        footerInfo: "10px",
        footerLogoBrandName: "36px",
        footerLogoIcon: "76px",
    },

    fontWeight: {
        lxx: 900,
        lx: 800,
        l: 700,
        m: 600,
    },
    padding: {
        s: "5px",
        m: "10px",
        l: "20px",
        xl: "40px",
    },
    lineHeight: {
        s: "1em",
        m: "1.4em",
        l: "1.7em",
        xl: "2em",
    },
    /*     @media (min-width: ${({ theme }) => theme.device.m}) {
            width: 100%;
            margin: 0;
          } */
    device: {
        s: "576px",
        m: "768px",
        l: "992px",
        xl: "1200px",
        xxl: "1400px",
    },

    nav: {
        defaultBg: "white",
        scrollBg: "rgba(255,255,255,0.5)",
        burgerClose: "black",
        burgerOpen: "yellow",
    }
};


export const fontSlanted = `font-family:'Caveat', cursive;`