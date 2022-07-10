import { Contact } from "./../models/contact.model";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  contacts: Array<Contact> = [];

  constructor() {
    this.contacts = [
      { id: "1", firstName: "a", lastName: "b", phoneNumber: 12346 },
      { id: "2", firstName: "a", lastName: "b", phoneNumber: 12345 },
      { id: "3", firstName: "e", lastName: "f", phoneNumber: 12347 },
      { id: "4", firstName: "c", lastName: "d", phoneNumber: 12348 },
      { id: "5", firstName: "g", lastName: "h", phoneNumber: 12349 },
    ];
    this.sortContacts();
  }

  addContact(firstName: string, lastName: string, phoneNumber: number): void {
    let newContact: Contact = {
      id: stringify(this.contacts.length + 1),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    this.contacts.push(newContact);
    this.sortContacts();
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((c) => c.id != contact.id);
  }

  getContactsByLastName(lastName: String): Array<Contact> {
    if (lastName === undefined || lastName.length === 0 || lastName === "") {
      return this.contacts;
    }
    return this.contacts.filter(
      (c) =>
        c.lastName.toLocaleLowerCase().trim() ==
        lastName.toLocaleLowerCase().trim()
    );
  }

  sortContacts(): void {
    console.log("here");
    this.contacts = this.contacts.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        if (a.phoneNumber < b.phoneNumber) {
          return -1;
        } else if (a.phoneNumber > b.phoneNumber) {
          return 1;
        }
      }
      return 0;
    });
  }
}
