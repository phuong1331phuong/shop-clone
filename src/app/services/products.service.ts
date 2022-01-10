import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from "../product.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = " http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }
}
