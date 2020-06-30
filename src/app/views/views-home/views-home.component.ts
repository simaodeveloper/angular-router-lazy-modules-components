import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  data = [
    { label: 'Faves', value: 22 },
    { label: 'Views', value: '31,200' },
    { label: 'Members', value: 52 },
  ];

  items = [
    { imageUrl: '/assets/images/couch.jpeg', title: 'Couch', description: 'A Couch' },
    { imageUrl: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'A Dresser' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
