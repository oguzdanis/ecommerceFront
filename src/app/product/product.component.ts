import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {AlertifyService} from '../services/alertify.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[AlertifyService]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService:AlertifyService,private  http:HttpClient) { }
  title = "Ürün Listesi";
  products: Product[] ;

  ngOnInit(): void {
    this.http.
    get<Product[]>("http://localhost:8080/api/product").
    subscribe(data=>{
      this.products = data;
    });
  }

  addToCart(product){
    this.alertifyService.success(product.name+" Added")
    this.alertifyService.error(product.name+" Error")
  }


}
