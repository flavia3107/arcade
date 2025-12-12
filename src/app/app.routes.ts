import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./app').then(m => m.App),
		children: [
			{
				path: '',
				loadComponent: () => import('./game-list/game-list').then(m => m.GameList)
			},
			{
				path: ':slug',
				loadComponent: () => import('./game-view/game-view').then(m => m.GameView)
			}
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];