import { Routes } from '@angular/router';
import { App } from './app';
import { GameList } from './game-list/game-list';
import { GameView } from './game-view/game-view';

export const routes: Routes = [
	{
		path: '', component: App, children: [
			{ path: '', component: GameList },
			{ path: ':slug', component: GameView }
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

