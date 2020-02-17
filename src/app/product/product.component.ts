import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  title = "Ürün Listesi";
  products: Product[] = [
    {
      id:1,
      name: "İphone 11 Pro",
      price: 2500,
      description: "Günümüz Türkiye'sinde statu belirtisi olan bir cihazdır. Parası olana tavsiye olunur.",
      pictureUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-gold-select-2019_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1567808542418",
      productUrl: "https://www.apple.com/tr/iphone-11/"
    }
  ]

  ngOnInit(): void {
  }

}
