import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BottonThemes } from './shared/ui/botton-themes/botton-themes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottonThemes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('admin-system-clari');

  protected readonly stats = [
    { label: 'Pedidos de hoy', value: '28' },
    { label: 'Máquinas activas', value: '12' },
    { label: 'Clientes registrados', value: '340' },
  ];
}
