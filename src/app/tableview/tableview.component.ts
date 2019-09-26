import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'status'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: 'Active'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: 'Active'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'Active'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'Active'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'Active'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status: 'Active'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status: 'Active'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status: 'Active'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status: 'Active'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status: 'Active'},
  ];
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
