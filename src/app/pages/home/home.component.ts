import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataGame, Game } from 'src/app/interface/game';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
	games:[] | any = []
	game: DataGame= {
		id: '',
		name: '',
		background_image:'',
		plataforms: '',
		ratings:[]
	};
	@Input() nameGame:string = ''


  constructor(private service:GameService) { }

  ngOnInit(): void {

		this.serarch();
  }

	ngOnChanges(){
		this.searchByName()
	}

	structureGame(game:Game| any):{}{
		let dateGame = this.game

		const {
			id,
			name,
			background_image,
			parent_platforms,
			ratings,
		} = game



		let stringPlataforms:string  = parent_platforms[0].platform.name
		for(let i = 1; i<3; i ++ ){
			if (parent_platforms[i]) {
				stringPlataforms += ` | ${parent_platforms[i].platform.name}`
			}
		}

		dateGame = {
			id,
			name,
			background_image,
			plataforms: stringPlataforms,
			ratings: ratings.map((v:{title:string,percent:string}) => [v.title,v.percent])
		}
		return dateGame;
	}


	searchByName(){
		this.games = []
		this.service.getBestGames(this.nameGame.split(' ').join('')).subscribe({
			next:(result) => {
				result.results.map(game => {
				this.games.push(this.structureGame(game))
				})
		}
		})
	}

	serarch(){
		this.service.getBestGames().subscribe({
			next:(result) => {
					result.results.map(game => {
					this.games.push(this.structureGame(game))
					})
			}
		})
	}
}
