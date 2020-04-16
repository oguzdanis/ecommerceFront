import {Injectable} from '@angular/core';
import {Product} from '../product/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(
)
export class ProductService {

  constructor(private http: HttpClient) {
  }
  path = 'http://localhost:8080/api/product';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }
}
