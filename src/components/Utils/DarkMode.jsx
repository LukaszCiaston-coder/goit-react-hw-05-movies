import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(isDarkModeSaved);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);

    document.documentElement.classList.toggle('dark-mode', darkMode);

    const elementsToToggle = document.querySelectorAll('.dark-mode');
    elementsToToggle.forEach(element => {
      element.classList.toggle('dark-mode', darkMode);
    });
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
