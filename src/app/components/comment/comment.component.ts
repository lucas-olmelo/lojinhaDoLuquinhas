import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  
  @Input() username: string = '';
  @Input() userEmail: string = '';
  @Input() userImage: string = '';

  ngOnInit() {
    this.randomNumber = Array(this.getRandomInt());
  }

  randomNumber: number[] = [];

  getRandomInt() {
    let min = Math.ceil(4);
    let max = Math.floor(5);

    let number = (Math.floor(Math.random() * (max - min + 1) + min));
    console.log(number);
    
    return number;// The maximum is exclusive and the minimum is inclusive
  }
}
