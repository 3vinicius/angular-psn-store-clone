import { Component, OnInit } from '@angular/core';
import { DataGame, Game } from 'src/app/interface/game';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	games:[] | any = []
	game: DataGame= {
		id: '',
		name: '',
		background_image:'',
		plataforms: [],
		ratings:[]
	};



  constructor(private service:GameService) { }

  ngOnInit(): void {

		this.serarch();
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

		dateGame = {
			id,
			name,
			background_image,
			plataforms: parent_platforms.map( (v:{platform:{name:string}}) => v.platform.name),
			ratings: ratings.map((v:{title:string,percent:string}) => [v.title,v.percent])
		}
		return dateGame;
	}



	serarch(){
		this.service.getBestGames().subscribe({
			next:(result) => {
					result.results.map(game => {
					this.games.push(this.structureGame(game))
					})
					console.log(this.games)
			}
		})
	}
}
