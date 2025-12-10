import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GAMES } from '../../shared/configs/models';

@Component({
  selector: 'app-game-list',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  games = GAMES;
  selectedGame = '';
}
