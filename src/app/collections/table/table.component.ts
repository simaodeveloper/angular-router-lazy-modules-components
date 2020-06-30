import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('class') classNames: string;
  @Input() data: Array<Object>;
  @Input() headers: Array<Object>;

  constructor() { }

  ngOnInit(): void {
  }

}
