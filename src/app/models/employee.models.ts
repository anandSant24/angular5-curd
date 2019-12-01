export class Employee{
  id:number;
  name: string;
  gender: string;
  email?: string;
  phoneNumber?:number;
  contactPreference:string;
  dateOfBirth: Data;
  department:string;
  isActive: boolean;
  photoPath?:string;
}