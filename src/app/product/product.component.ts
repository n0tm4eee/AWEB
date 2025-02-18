import { Component } from '@angular/core';

@Component({
  selector: 'app-product',  // ✅ This MUST match <app-product>
  template: `<h2>Product List</h2>`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent { }
