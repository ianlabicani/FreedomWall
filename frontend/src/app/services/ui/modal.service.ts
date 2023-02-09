import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal: boolean = false;
  modalContent: string = '';
  private modalSubject = new Subject<boolean>();
  private modalContentSubject = new Subject<string>();
  constructor() {}

  toggleModal(): void {
    this.showModal = !this.showModal;
    this.modalSubject.next(this.showModal);
    console.log(this.showModal);
  }

  modalToggler(): Observable<any> {
    return this.modalSubject.asObservable();
  }

  toggleModalContent(modalContent: string): void {
    this.modalContent = modalContent;
    this.modalContentSubject.next(this.modalContent);
  }

  modalContentToggler(): Observable<any> {
    return this.modalContentSubject.asObservable();
  }
}
