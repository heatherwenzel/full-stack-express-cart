import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get("/api/cart-items", { responseType: "json"});
  }

  // addItem(id: number, product: string, price: number, quantity: number) {
  //   return this.http.post("/cart-items", { id: id, product: product, price: price, quantity: quantity }, { responseType: "json"});
  // }

  addItem(item) {
    return this.http.post("/api/cart-items", item, { responseType: "json"});
  }

  // replaceItem(id: number, newId: number, newProduct: string, newPrice: number, newQuantity: number) {
  //   return this.http.put(`/cart-items/${id}`, { id: newId, product: newProduct, price: newPrice, quantity: newQuantity }, { responseType: "json"});
  // }

  updateItem(item) {
    return this.http.put(`/api/cart-items/${item.id}`, item, { responseType: "json"});
  }

  // deleteItem(id: number) {
  //   console.log(id);
  //   return this.http.delete(`/cart-items/${id}`, { responseType: "json"});
  // }

  removeItem(id) {
    return this.http.delete(`/api/cart-items/${id}`, { responseType: "json"});
  }
}
