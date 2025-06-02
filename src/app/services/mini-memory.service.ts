import { Injectable } from '@angular/core';
import { Card } from '../definitions/card';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiniMemoryService {
  draws: number = 0;
  deckIsBlocked: boolean = false;
  cards: Card[] = [];

  private restartSubject = new Subject<void>();
  restart$ = this.restartSubject.asObservable();

  constructor() {}

  public initCarddeck() {
    this.cards = [];
    // Create two cards for each value from 1 to 8
    for (let value = 1; value <= 8; value++) {
      this.cards.push(
        { value, enabled: true, selected: false },
        { value, enabled: true, selected: false }
      );
    }
    // Optionally shuffle the deck
    return this.cards.sort(() => Math.random() - 0.5);
  }

  public blockCarddeck() {
    this.deckIsBlocked = true;
  }

  public unblockCarddeck() {
    this.deckIsBlocked = false;
  }

  public increaseDraws() {
    this.draws++;
  }

  triggerRestart() {
    this.draws = 0;
    this.unblockCarddeck();
    this.restartSubject.next();
  }
}
