import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../../../product.model';
import { MessengerService} from './../../../../services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
cartItems: any[] = [];
  cartTotal: number = 0;

  constructor() { }

  ngOnInit(): void {

  }



}
