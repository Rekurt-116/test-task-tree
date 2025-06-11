import { Component, Input, signal } from '@angular/core';
import { Node } from '../data-tree';
import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-tree',
  standalone: true,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  imports: [CommonModule],
})
export class TreeComponent {
  @Input() nodes: Node[] = [];
  @Input() template!: any;
  @Input() onButton: (node: Node) => void = () => {};

  callOnButton(node: Node) {
    this.onButton(node);
  }

  private expandedSet = signal<Set<number>>(new Set<number>());

  isExpanded(node: Node): boolean {
    return this.expandedSet().has(node.id);
  }

  toggle(node: Node) {
    const set = new Set(this.expandedSet());
    if (set.has(node.id)) {
      set.delete(node.id);
    } else {
      set.add(node.id);
    }
    this.expandedSet.set(set);
  }
}
