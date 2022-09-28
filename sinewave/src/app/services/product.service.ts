import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

const backendUrl = environment.backendUrl

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${backendUrl}/albums`)
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${backendUrl}/albums/${id}`)
  }

  getRelatedProducts(param: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${backendUrl}/albums?genre=${param}`)
  }
}
