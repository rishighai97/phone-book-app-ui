import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Contact } from "../models/contact.model";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
})
export class ContactListComponent implements OnInit {
  @Input()
  lastName: string = "";

  constructor(
    private contactService: ContactService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  getContacts(): Array<Contact> {
    return this.contactService.getContactsByLastName(this.lastName);
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.changeDetectorRef.markForCheck;
  }

  
}
