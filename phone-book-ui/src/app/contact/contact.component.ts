import { Contact } from './../models/contact.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  contact: Contact;

  @Output()
  deleteContact: EventEmitter<Contact> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  delete(contact: Contact) {
      this.deleteContact.emit(contact);
  }

}
