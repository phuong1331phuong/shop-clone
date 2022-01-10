import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../../../product.model';
import { MessengerService} from './../../../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;


  constructor(private message: MessengerService,) { }

  ngOnInit(): void {

  }

  handleAddToCart(){
    this.message.sendMessage(this.productItem)
    console.log(this.productItem)
  }

}
