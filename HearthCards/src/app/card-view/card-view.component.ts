import { Component, OnInit } from '@angular/core';
import {CardService} from "../card.service";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  cards: Array<any>;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards("Mage").subscribe(data => { this.cards = data; })
  }

}
