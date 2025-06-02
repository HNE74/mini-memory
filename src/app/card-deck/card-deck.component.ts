import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberCardComponent } from '../number-card/number-card.component';
import { MiniMemoryService } from '../services/mini-memory.service';
import { Card } from '../definitions/card';

@Component({
  selector: 'app-card-deck',
  standalone: true,
  imports: [CommonModule, NumberCardComponent],
  templateUrl: './card-deck.component.html',
  styleUrl: './card-deck.component.css',
})
export class CardDeckComponent {
  firstSelectedCard?: Card;
  secondSelectedCard?: Card;

  constructor(public gameService: MiniMemoryService) {
    gameService.initCarddeck();

    this.gameService.restart$.subscribe(() => {
      gameService.initCarddeck();
    });
  }

  cardSelected(card: Card) {
    if (!this.firstSelectedCard) {
      this.firstSelectedCard = card;
      this.gameService.increaseDraws();
      return;
    }

    if (!this.secondSelectedCard) {
      this.gameService.increaseDraws();
      this.secondSelectedCard = card;
      if (this.firstSelectedCard.value === this.secondSelectedCard.value) {
        this.firstSelectedCard.enabled = false;
        this.secondSelectedCard.enabled = false;
      }

      this.gameService.blockCarddeck();
      setTimeout(() => {
        console.log('Two cards selected!');
        if (this.firstSelectedCard && this.secondSelectedCard) {
          this.firstSelectedCard.selected = false;
          this.secondSelectedCard.selected = false;
        }
        this.firstSelectedCard = undefined;
        this.secondSelectedCard = undefined;
        this.gameService.unblockCarddeck();
      }, 1000);
    }
  }

  private checkSelectedCardsHaveEqualValue() {}
}
