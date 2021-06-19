import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.less']
})
export class DataGridComponent implements OnInit {

  constructor() { }

  fakeArray = new Array(10);

  ngOnInit(): void {
  }

}
