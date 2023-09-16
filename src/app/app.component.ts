import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
	nameValue:string = '';

	searchNameFather(name:string){
		this.nameValue = name
	}
}
