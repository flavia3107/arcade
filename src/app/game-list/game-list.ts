import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GAMES } from '../../shared/configs/models';

@Component({
  selector: 'app-game-list',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  private _router = inject(Router);
  games = GAMES;
  selectedGame = '';

  public navigate(gameUrl: string) {
    this._router.navigate(['/', gameUrl]);
  }
}
