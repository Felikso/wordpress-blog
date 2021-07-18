import React, { useContext } from "react"

import { ThemeProvider as ThemeProviderStyle } from "styled-components";
import { themeStyleLight as theme } from "styles";
import { themeStyleDark as themeDark } from "styles";
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from 'styles';

import { MobileNav, CustomedFooter } from "components/theme"


export const Layout = ({ children }) => {
  const { themeMode } = useContext(ThemeContext);

  return (

    <>
      <ThemeProviderStyle theme={themeMode == 'light' ? theme : themeDark} >
        <Global theme={themeMode == 'light' ? theme : themeDark} />
        <MobileNav />
        {children}

        <CustomedFooter />
      </ThemeProviderStyle>
    </>
  )
}
