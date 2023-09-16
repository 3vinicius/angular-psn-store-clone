import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
	nameGame:string = ''
  constructor() { }

	@Output() nameForSearch = new EventEmitter();


  ngOnInit(): void {
  }

	searchName(){
		this.nameForSearch.emit(this.nameGame);
	}
}
