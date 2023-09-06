import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-line',
  templateUrl: './prod-line.component.html',
  styleUrls: ['./prod-line.component.css']
})
export class ProdLineComponent {
  defaultImage: string = 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg';

  cover: string = '../../../assets/images/covers/game_cover_';
  extensao: string = '.jpg';

}
