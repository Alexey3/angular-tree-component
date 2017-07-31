import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'TreeNodeExpander, tree-node-expander',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `.toggle-children-placeholder {
        display: inline-block;
        height: 10px;
        width: 24px;
        position: relative;
        top: 1px;
        padding-right: 3px;
    }`
  ],
  template: `
    <ng-container *mobxAutorun>
      <span
        *ngIf="node.hasChildren"
        (click)="node.mouseAction('expanderClick', $event)">
      
        <md-icon *ngIf="node.isCollapsed">add</md-icon>
        <md-icon *ngIf="node.isExpanded">remove</md-icon>
        <span class="toggle-children"></span>
      </span>
      <span
        *ngIf="!node.hasChildren"
        class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
})
export class TreeNodeExpanderComponent {
  @Input() node: TreeNode;
}
