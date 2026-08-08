import { Component, computed, signal } from '@angular/core';

type Theme = 'dark' | 'light';

const THEME_KEY = 'clari-theme';

@Component({
  selector: 'app-botton-themes',
  imports: [],
  templateUrl: './botton-themes.html',
  styleUrl: './botton-themes.css',
})
export class BottonThemes {
  protected readonly isDark = signal(this.#readStored() === 'dark');

  constructor() {
    this.#apply(this.isDark() ? 'dark' : 'light');
  }

  protected toggleTheme(): void {
    const next: Theme = this.isDark() ? 'light' : 'dark';
    this.#apply(next);
    this.isDark.set(next === 'dark');
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }

  protected readonly ariaLabel = computed(() =>
    this.isDark()
      ? 'Tema oscuro activo. Cambiar a tema claro.'
      : 'Tema claro activo. Cambiar a tema oscuro.',
  );

  #readStored(): Theme {
    try {
      return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }

  #apply(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
