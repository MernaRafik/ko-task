import { Component, Input, OnInit, Output } from '@angular/core';
import { CardInput} from './interfaces/card-input';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  qty = 0;
  ngOnInit(): void {
  }

@Input("card")
card:CardInput={image:"",title:"",description:"",price:0};

  protected increaseQty(){
    this.qty = this.qty +1; 
  }

  protected decreaseQty(){
      this.qty = this.qty -1; 
  }

}
