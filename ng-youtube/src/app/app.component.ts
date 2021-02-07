import { Component } from '@angular/core';


export interface Card {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'My Application';
  toggle = true;

  cards: Card[] = [
    { title: 'Card 1', text: 'This is text card 1' },
    { title: 'Card 2', text: 'This is text card 2' },
    { title: 'Card 3', text: 'This is text card 3' },
    { title: 'Card 4', text: 'This is text card 4' },
  ]

  ToggleCards(): void {
    this.toggle = !this.toggle;
  }
}
