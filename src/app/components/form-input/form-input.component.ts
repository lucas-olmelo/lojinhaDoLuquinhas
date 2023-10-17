import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {

  @Input() inputTitle: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string = '';
  @Input() model: string = '';
}
