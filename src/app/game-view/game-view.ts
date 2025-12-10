import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SafeUrlPipe } from '../../shared/pipes/safeUrl';

@Component({
  selector: 'app-game-view',
  imports: [SafeUrlPipe, AsyncPipe],
  templateUrl: './game-view.html',
  styleUrl: './game-view.scss',
})
export class GameView {
  private _route = inject(ActivatedRoute);
  public gameUrl$ = this._route.paramMap.pipe(
    map(params => {
      const slug = params.get('slug');
      return slug ? `https://flavia3107.github.io/${slug}` : null;
    })
  );
}
