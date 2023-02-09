import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-toggler',
  templateUrl: './modal-toggler.component.html',
  styleUrls: ['./modal-toggler.component.scss'],
})
export class ModalTogglerComponent implements OnInit {
  @Input() text: string = '';
  @Output() togglerClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggleModal(modalTogglerFor: string): void {
    this.togglerClick.emit(modalTogglerFor);
  }
}
