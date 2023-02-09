import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/ui/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showModal: boolean = false;
  subscription = new Subscription();

  constructor(private modalService: ModalService) {
    this.subscription = this.modalService
      .modalToggler()
      .subscribe((val) => (this.showModal = val));
  }
  ngOnInit(): void {}

  toggleModal(): void {
    this.modalService.toggleModal();
  }
}
