import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
/* import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg'; */
/* import { ReactComponent as moonIcon } from "assets/icons/moon.svg"
import { ReactComponent as sunIcon } from "assets/icons/sun.svg" */

/* import { Wrapper } from './styles'; */

import Toggle from 'react-toggle';
import { ToggleWrapper, ToggleIcons } from './styles'

export const Toggler = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleWrapper>
      <Toggle
        icons={{
          checked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☾</ToggleIcons>,
          unchecked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☼</ToggleIcons>,
        }}
        onChange={toggleTheme}
      />
    </ToggleWrapper>
  );
};

