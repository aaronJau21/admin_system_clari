import { TestBed } from '@angular/core/testing';
import { BottonThemes } from './botton-themes';

describe('BottonThemes', () => {
  beforeEach(async () => {
    window.localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [BottonThemes],
    }).compileComponents();
  });

  function createFixture() {
    const fixture = TestBed.createComponent(BottonThemes);
    fixture.detectChanges();
    return fixture;
  }

  it('debe crear el componente', () => {
    expect(createFixture().componentInstance).toBeTruthy();
  });

  it('debe activar el modo oscuro por defecto', async () => {
    createFixture();
    await Promise.resolve();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('debe alternar entre modos y persistir en localStorage', () => {
    const fixture = createFixture();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(window.localStorage.getItem('clari-theme')).toBe('light');

    button.click();
    fixture.detectChanges();

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(window.localStorage.getItem('clari-theme')).toBe('dark');
  });
});
