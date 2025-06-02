import { Component } from '@angular/core';
import { MiniMemoryService } from '../services/mini-memory.service';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css',
})
export class GameHeaderComponent {
  constructor(public gameService: MiniMemoryService) {}
}
