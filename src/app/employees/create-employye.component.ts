import { Component, OnInit } from "@angular/core";
import { ngForm } from "@angular/forms";
import { Department } from "../models/department.model";

@Component({
  templateUrl: "create-employye.component.html",
  styleUrls: ["create-employye.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" },
    { id: 4, name: "Parol" }
  ];
  // isAcive = true;
  //department: "1";

  ngOnInit() {}

  saveEmployee(formDeatils: ngForm): void {
    console.log(formDeatils.value);
  }
}
