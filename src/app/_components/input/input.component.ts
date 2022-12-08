import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() password: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  emitInput(input: string) {
    console.log(
      'JE SUIS LE FILS ET VOICI LA VALEUR QUE JE VAIS ENVOYER : ' + input
    );
    this.inputEmitter.emit(input);
  }
}
