import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/game.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:GameService) { }

  ngOnInit(): void {

		this.serarch();
  }

	serarch(){
		this.service.getBestGames().subscribe({
			next:(v) => console.log(v)
		})
	}
}
