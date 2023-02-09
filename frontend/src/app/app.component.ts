import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './services/ui/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showModal: boolean = false;
  modalContent: string = '';
  showModalSubscription = new Subscription();
  modalContentSubscription = new Subscription();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.showModalSubscription = this.modalService
      .modalToggler()
      .subscribe((val) => (this.showModal = val));

    this.modalContentSubscription = this.modalService
      .modalContentToggler()
      .subscribe((val) => (this.modalContent = val));
  }
}
