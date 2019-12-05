import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../models/department.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  templateUrl: "create-employye.component.html",
  styleUrls: ["create-employye.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  showPreview = false;
  gender:string="male";
  togglePreviewPhoto(): void {
    this.showPreview = !this.showPreview;
  }
  dateOfBirth: Date = new Date("12/20/1990");
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        maxDate: new Date(2020, 0, 1),
        defaultInputFormat: "DD/MM/YYY"
      }
    );
  }
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" },
    { id: 4, name: "Parol" }
  ];
  // isAcive = true;
  //department: "1";

  ngOnInit() {}

  saveEmployee(formDeatils: NgForm): void {
    console.log(formDeatils.value);
  }
}
