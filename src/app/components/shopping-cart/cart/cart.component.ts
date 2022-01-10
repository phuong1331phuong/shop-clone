import { Component, OnInit } from '@angular/core';
import { Product} from '../../../product.model';
import { MessengerService} from './../../../services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(private message: MessengerService) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe(product => console.log(product))

  //   addProductToCart(product: Product){
  //   this.cartItems.push({
  //       productName: product.name,
  //       productQuantity: product.quantity,
  //       productPrice: product.price
  //     })
  //     this.cartTotal = 0;
  //     this.cartItems.forEach(item =>{
  //       this.cartTotal += (item.item.productQuantity * item.productPrice)
  //     })
  // }
  }



}
