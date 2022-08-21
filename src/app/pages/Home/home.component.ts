import { Component, OnInit } from '@angular/core';
import { CardInput} from 'src/app/features/card/interfaces/card-input';
import { ProductService } from 'src/app/features/products/services/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  qty = 0;
  cards: CardInput[];
  ngOnInit(): void {
  }

  constructor(private service: ProductService){
    this.cards = this.service.find();
  }
}


