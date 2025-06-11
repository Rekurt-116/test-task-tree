import { Component } from '@angular/core';
import { treeNodes, Node } from './data-tree';
import { TreeComponent } from './tree/tree.component';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  treeData = treeNodes;

  logClick(node: Node) {
    console.log(`нажали на узел ID ${node.id}`);
  }

  expandAll(node: Node) {
    const count = node.children.length;
    console.log(
      `Открыть все: у узла "${node.title}" ${count} дочерних элементов`
    );
  }
}
