import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../data/interfaces/menu-interface';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SideBarComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css',
})
export class MenuPageComponent {
  private readonly menuItemsSignal = signal<MenuItem[]>([
    { id: 1, name: 'Item 1', value: 20, selected: false },
    { id: 2, name: 'Item 2', value: 30, selected: false },
    { id: 3, name: 'Item 3', value: 40, selected: false },
    { id: 4, name: 'Item 4', value: 50, selected: false },
  ]);

  menuItems = this.menuItemsSignal.asReadonly();
  type = signal<string>('Type untracked');

  selectedItems = computed(() =>
    this.menuItemsSignal().filter((item) => item.selected),
  );
  selectedCount = computed(() => this.selectedItems().length);
  totalValue = computed(() =>
    this.selectedItems().reduce((sum, item) => sum + item.value, 0),
  );

  setType = (name: string): void => {
    this.type.set(name);
  };

  toggleItem(itemId: number): void {
    this.menuItemsSignal.update((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item,
      ),
    );
  }
}
