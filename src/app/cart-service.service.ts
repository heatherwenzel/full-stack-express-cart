import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get("/api/cartItems", { responseType: "json"});
  }

  addItem(id: number, product: string, price: number, quantity: number) {
    return this.http.post("/api/cartItems", { id: id, product: product, price: price, quantity: quantity }, { responseType: "json"});
  }

  deleteItem(id: number) {
    console.log(id);
    return this.http.delete(`/api/cartItems/${id}`, { responseType: "json"});
  }

  replaceItem(id: number, newId: number, newProduct: string, newPrice: number, newQuantity: number) {
    return this.http.put(`/api/cartItems/${id}`, { id: newId, product: newProduct, price: newPrice, quantity: newQuantity }, { responseType: "json"});
  }
}
