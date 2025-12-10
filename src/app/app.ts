import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GAMES } from '../shared/configs/models';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('arcade');
  games = GAMES;
  selectedGame = '';
}
