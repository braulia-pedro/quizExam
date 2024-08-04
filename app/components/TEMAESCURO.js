"use client"; 

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar para o tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
}
