import { Component, EventEmitter, Output } from '@angular/core';
import { MiniMemoryService } from '../services/mini-memory.service';

@Component({
  selector: 'app-game-footer',
  standalone: true,
  imports: [],
  templateUrl: './game-footer.component.html',
  styleUrl: './game-footer.component.css',
})
export class GameFooterComponent {
  constructor(public gameService: MiniMemoryService) {}

  restartGame() {
    this.gameService.triggerRestart();
  }
}
