import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GAMES } from '../shared/configs/models';
import { SafeUrlPipe } from '../shared/pipes/safeUrl';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('arcade');
  games = GAMES;
  selectedGame = '';
}
