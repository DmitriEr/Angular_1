import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {


  @Input() card: Card;
  @Input() index: number;

  ngOnInit() {
  }

  title =  'My card title';
  text = 'My text';
  textColor = 'blue';
  cardDate: Date = new Date();

  changeColor(color: string): void {
    this.textColor = color;
  }

  changeTitle(): void {
    this.title = 'Title has been changed!';
  }

  changeHandler() {
    console.log(this.title);
  }

}
