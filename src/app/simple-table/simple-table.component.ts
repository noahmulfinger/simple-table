import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
  }

}
