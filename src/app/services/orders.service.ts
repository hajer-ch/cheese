import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
orderURL:'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
  addOrder(order: any) {
    return this.httpClient.post(`${this.orderURL}/addOrder`, order);
  }
  getAllOrders() {
    return this.httpClient.get<{ message: string, orders: any }>(`${this.orderURL}/orders`);
  }
  getOrderById(id: any) {
    return this.httpClient.get<{ findedOrder: any }>(`${this.orderURL}/getOrder/${id}`);
  }
  updateOrder(order: any) {
    return this.httpClient.put<{ message: string }>(`${this.orderURL}/updateOrder/${order._id}`, order);
  }
  delateOrder(id: any) {
    return this.httpClient.delete<{ message: string }>(`${this.orderURL}/deleteById/${id}`);
  }

}
