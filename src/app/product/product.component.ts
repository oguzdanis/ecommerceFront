import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {AlertifyService} from '../services/alertify.service';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AlertifyService, ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService: AlertifyService, private  http: HttpClient, private productService: ProductService) {
  }

  title = 'Ürün Listesi';
  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  addToCart(product) {
    this.alertifyService.success(product.name + ' Added');
    this.alertifyService.error(product.name + ' Error');
  }


}
