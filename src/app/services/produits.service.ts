import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
productURL='http://localhost:3000';
  constructor(private httpCLient: HttpClient) { }

getAllProducts() {
  return this.httpCLient.get<{ message: string, products: any }>(`${this.productURL}/products`);
}
getProductById(id: any) {
  return this.httpCLient.get<{ findedProduct: any }>(`${this.productURL}/getProduct/${id}`);
}
updateProduct(product: any) {
  return this.httpCLient.put<{ message: string }>(`${this.productURL}/updateProduct/${product._id}`, product);
}
delateProduct(id: any) {
  return this.httpCLient.delete<{ message: string }>(`${this.productURL}/deleteById/${id}`);
}
searchByTitle(product) {
  return this.httpCLient.post<{ searchedProducts: any }>(`${this.productURL}/searchProduct`, product);
}
addProduct(obj:any, image:File){
  console.log('Here obj into service', obj);
  
  const formData = new FormData();
  formData.append('title', obj.title); 
  formData.append('description', obj.description); 
  formData.append('price', obj.price); 
  formData.append('image', image); 
  return this.httpCLient.post(`${this.productURL}/addProduct`, formData);
}
basketSubject = new Subject <any>();
}
