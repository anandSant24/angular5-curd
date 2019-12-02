import { Component } from "@angular/core";
import { ngForm } from "@angular/forms";

@Component({
  templateUrl: "create-employye.component.html",
  styleUrls: ["create-employye.component.css"]
})
export class CreateEmployeeComponent {
  isAcive = true;
  saveEmployee(formDeatils: ngForm): void {
    console.log(formDeatils);
  }
}
