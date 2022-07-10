import { AddContactComponent } from "./../add-contact/add-contact.component";
import { ContactService } from "./../services/contact.service";
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  lastName: string;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  openAddContactDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddContactComponent, dialogConfig);
  }
}
