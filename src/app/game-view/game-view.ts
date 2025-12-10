import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { SafeUrlPipe } from '../../shared/pipes/safeUrl';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { GAMES } from '../../shared/configs/models';

@Component({
  selector: 'app-game-view',
  imports: [SafeUrlPipe, AsyncPipe, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './game-view.html',
  styleUrl: './game-view.scss',
})
export class GameView {
  private _route = inject(ActivatedRoute);
  public games = GAMES;

  public gameUrl$ = this._route.paramMap.pipe(
    map(params => {
      const slug = params.get('slug');
      return slug ? `https://flavia3107.github.io/${slug}` : null;
    })
  );
}
