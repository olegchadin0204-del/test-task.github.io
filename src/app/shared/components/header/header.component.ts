import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../../data/interfaces/menu-interface';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() selectedCount?: number = 0;
  @Input() totalValue: number = 0;
  @Input() type: string = '';
  @Input() selectedItems: MenuItem[] = [];
}
