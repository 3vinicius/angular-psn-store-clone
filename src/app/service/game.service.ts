import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Game } from '../interface/game';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class GameService {
	private game: Game | any = '';
	private url: string = '';
	private key: string = '';
	private params:{} = {}


	/* "https://api.rawg.io/api/games?key=4ceba30039d94e0c852f8730c12a4e17&page=2&page_size=10&search=eldenring" */
  constructor(private http : HttpClient) {
			this.url = environment.baseUrl;
			this.key = environment.key;
	}

	getBestGames():Observable<Game>{
		this.game = this.http.get<Game>(`${this.url}?key=${this.key}&page=1&page_size=6`)
		return this.game;
	}



}
