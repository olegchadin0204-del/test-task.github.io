import { Component, Input, signal } from '@angular/core';
import { SideBarItems } from '../../../data/interfaces/menu-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() setType!: (name: string) => void;

  types = signal<SideBarItems[]>([
    { id: 1, name: 'Type 1' },
    { id: 2, name: 'Type 2' },
  ]);
}
