import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');

  const toggleTheme = () => {
    if (themeMode === 'light') {
      window.localStorage.setItem('themeMode', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('themeMode', 'light');
      setTheme('light');
    }
  };

  return [themeMode, toggleTheme];
};

export default useDarkMode