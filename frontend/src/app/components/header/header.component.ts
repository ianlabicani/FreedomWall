import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showModal: boolean = false;
  modalContent: string = '';
  subscription1 = new Subscription();
  subscription2 = new Subscription();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.subscription1 = this.modalService
      .modalToggler()
      .subscribe((val) => (this.showModal = val));
    this.subscription2 = this.modalService
      .modalContentToggler()
      .subscribe((val) => (this.modalContent = val));
  }

  toggleModal(event: string): void {
    this.modalService.toggleModal();
    this.modalService.toggleModalContent(event);
    console.log(event);
  }
}
