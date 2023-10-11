import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(isDarkModeSaved);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  useEffect(() => {
    // Zapisz wartość trybu ciemnego w localStorage po zmianie
    localStorage.setItem('darkMode', darkMode);

    // Zaktualizuj klasy CSS w dokumencie na podstawie wartości darkMode
    document.documentElement.classList.toggle('dark-mode', darkMode);

    // Dostosuj klasy CSS dla elementów poza kontenerem, które mają zmieniać się w trybie jasnym
    const elementsToToggle = document.querySelectorAll('.dark-mode');
    elementsToToggle.forEach(element => {
      element.classList.toggle('dark-mode', darkMode);
    });
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
