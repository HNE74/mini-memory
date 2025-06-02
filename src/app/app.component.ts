import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Card } from './definitions/card';
import { MiniMemoryService } from './services/mini-memory.service';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameFooterComponent } from './game-footer/game-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardDeckComponent,
    GameHeaderComponent,
    GameFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mini-memory';

  cardDeck?: Card[];

  card: Card = {
    value: 2,
    enabled: true,
    selected: true,
  };
}
