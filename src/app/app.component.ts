import { Component } from "@angular/core";
import { CartServiceService } from "./cart-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cartItems: any;

  constructor(private apiService: CartServiceService) {
    this.apiService.getAllItems().subscribe(response => {
      this.cartItems = response;
    });
  }

  addItem(id: number, product: string, price: number, quantity: number) {
    this.apiService
      .addItem(id, product, price, quantity)
      .subscribe(response => {
        this.cartItems = response;
      });
  }

  replaceItem(
    id: number,
    newId: number,
    newProduct: string,
    newPrice: number,
    newQuantity: number
  ) {
    this.apiService
      .replaceItem(id, newId, newProduct, newPrice, newQuantity)
      .subscribe(response => {
        this.cartItems = response;
      });
  }

  deleteItem(id: number) {
    console.log(id);    
    this.apiService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }
  
}
