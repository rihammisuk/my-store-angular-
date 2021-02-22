import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts-component',
  templateUrl: './product-alerts-component.component.html',
  styleUrls: ['./product-alerts-component.component.css']
})
export class ProductAlertsComponentComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}