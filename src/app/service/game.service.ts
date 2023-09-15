import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GamesServices } from '../interface/game';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class GameService {
	private game: GamesServices | any = '';
	private url: string = '';
	private key: string = '';


  constructor(private http : HttpClient) {
			this.url = environment.baseUrl;
			this.key = environment.key;
	}

	getBestGames():Observable<GamesServices>{
		this.game = this.http.get<GamesServices>(`${this.url}?key=${this.key}&page=1&page_size=6`)
		return this.game;
	}



}
