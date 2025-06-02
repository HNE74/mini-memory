import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../definitions/card';
import { MiniMemoryService } from '../services/mini-memory.service';

@Component({
  selector: 'app-number-card',
  standalone: true,
  imports: [],
  templateUrl: './number-card.component.html',
  styleUrl: './number-card.component.css',
})
export class NumberCardComponent {
  @Input()
  card?: Card;

  @Output()
  cardSelected = new EventEmitter<Card>();

  constructor(public gameService: MiniMemoryService) {}

  selectCard() {
    if (
      !this.gameService.deckIsBlocked &&
      this.card &&
      this.card.enabled &&
      !this.card.selected
    ) {
      this.card.selected = true;
      this.cardSelected.emit(this.card);
    }
  }
}
