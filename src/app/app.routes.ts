import { Routes } from '@angular/router';
import { App } from './app';
import { GameView } from './game-view/game-view';

export const routes: Routes = [
	{ path: '', component: App },
	{ path: ':slug', component: GameView },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];