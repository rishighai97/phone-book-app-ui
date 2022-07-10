import { ContactService } from "./../services/contact.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Contact } from "../models/contact.model";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  saveContactForm: FormGroup;
  submitAttempted: boolean = false;
  errors = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  fieldRequiredErrorMessages = {
    firstName: "Please enter contact's first name",
    lastName: "Please enter contact's last name",
    phoneNumber: "Please enter contact's phone number",
  };

  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.saveContactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    });
  }

  save() {
    this.submitAttempted = true;
    if (this.saveContactForm.valid) {
      console.log("Saving form");
      this.saveContactForm.get("firstName").value;
      this.contactService.addContact(
        this.saveContactForm.get("firstName").value,
        this.saveContactForm.get("lastName").value,
        this.saveContactForm.get("phoneNumber").value
      );
      this.dialogRef.close();
    } else {
      console.log("Invalid form");
    }
  }

  close() {
    this.dialogRef.close();
  }
}
