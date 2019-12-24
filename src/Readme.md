#3
When setting up routing in an angular application, the first step is to set the base path using the base href element. The base path tells the angular router, how to compose the navigation URLs. The browser uses the <base href> value to prefix relative URLs when referencing CSS files, scripts, and images

Ex: http://localhost:4200/list
here http://localhost:4200 is the base url for our app

When we deploy our application to a server, we typically deploy it to a sub folder on the server. For example, if we are deploying our application in a sub-folder called "emp", then we set the base href element to /emp/ as shown below.

<base href="/emp/">

This means all the URLs now will be relative to the "emp" base path and will be as shown below.
http://serverName/emp/list
http://serverName/emp/create

if you want to deploy your application on a server on sub-folder called "emp", then you will have to remember to update the base href element value in index.html to "/emp/". There are 2 ways we can do this.
Manually update the index.html file OR
Use the --base-href option along with the ng build command as shown below. This will update the "base href" element value index.html.ng build --base-href /emp/

During development, if you want a different base path other than "/", simply execute the "ng serve" command with --base-href option set to your desired base path as shown below.
ng serve -o --base-href /emp/

################################################

# 5

There are 2 ways to create forms in Angular
Template Driven Forms( form simple forms it is used)
Model Driven Forms (Commonly called Reactive Forms)(Used for more Complex forms)

# <form #employeeForm="ngForm" (ngSubmit)="saveEmployee(employeeForm)">

#employeeForm is called the template reference variable. Notice we have assigned "ngForm" as the value for the template reference variable employeeForm. So employeeForm variable holds a reference to the form. When Angular sees a form tag, it automatically attaches the ngForm directive to it. The ngForm directive supplements the form element with additional features. It holds all the form controls that we create with ngModel directive and name attribute, and monitors their properties like value, dirty, touched, valid etc.
#5
http://csharp-video-tutorials.blogspot.com/2017/12/angular-forms-tutorial.html

#6
http://csharp-video-tutorials.blogspot.com/2017/12/bootstrap-radio-buttons-in-angular.html

#7
If we include checked attribute on a radio button, we expect that radio button to be checked by default when the form initially loads. But you will discover that is not the case. In the following example, we have included "checked" attribute on "Male" radio button, but when the form is displayed it is not checked.
[input type="radio" name="gender" value="male" [(ngModel)]="gender" checked]

However, if you remove the "ngModel" directive from the radio button, then it gets checked as expected. Notice the "ngModel" directive is removed from the radio button.

[input type="radio" name="gender" value="male" checked]

With Angular Template Driven forms, we use "ngModel" directive for two-way data binding. So the moment we put it back in place the "checked" attribute does not work. To make it work include "gender" property in the component class and initialise to the value of the radio button that you want to have checked by default. In our case, let us say, we want the "Male" radio button to be checked by default. To achieve this include "gender" property initialised to value of "male" in the component class as shown below.

gender = 'male';

At this point you will have "Male" radio button checked by default when the form loads. Now, even if we remove the "checked" attribute from the "Male" radio button it is still checked by default when the form loads. This is because of the two-way data binding that we get with "ngModel" directive. For our form we do not want any radio button to be checked by default, so remove the "checked" attribute and the "gender" property from the component class.

How to disable a radio button : To disable a radio button, use the disabled attribute on that radio button. "Male" radio button in this case will be disabled when the form initially loads.
[input type="radio" name="gender" value="male" [(ngModel)]="gender" disabled]

Another important point to keep in mind. By default, disabled form controls are not included in the Angular auto generated form model. Since, the "Male" radio button is disabled, the gender property will not be included in the Angular generated form model.

In our form, we do not want any radio button to be disabled, so please remove the disabled attribute.

#ToDo
9 Need to find out why auto default select is not working as part of select

#10 Angular select option from an array

##NOTE ##

<option \*ngFor="let dept of departments"
[value]="dept.id">
{{dept.name}}</option>
We are binding dept.id with using [ ] so that we will get the property value of dept.id , if we are binding with string literal then we don't need [ ] square brackets
we can do like this
<option *ngFor="let dept of departments"
value="dept.name">
{{dept.name}}</option>

#11
Why is not a good practice to use the browser built-in DatePicker control
Installing ngx-bootstrap
Using ngx-bootstrap datepicker in Angular

Why is not a good practice to use the browser built-in DatePicker control : This is because the implementation of datepicker is different from browser vendor to vendor. This means our end users may have different experience depending on the browser they use. Let us understand this with an example.

On our "Create Employee" form we want to capture Date of Birth of an employee. Datepicker control is very useful in capturing dates from users. When we use the HTML5 input type date, the browser automatically displays it's built-in datepicker control. Include the following piece of HTML on "create-employee.component.html" file just below the "Department" field HTML

<div class="form-group">
  <label for="dateOfBirth">Date of Birth</label>
  <input id="dateOfBirth" name="dateOfBirth" [(ngModel)]="dateOfBirth"
          type="date" class="form-control" />
</div>

Notice we have set the input element type to date. At this point if we run the project and navigate to http://localhost:4200/create in Google chrome, we see the date-picker as shown below.

Now, if we navigate to the same url in firefox, we see a date-picker control that is very different from the date-picker control that is on Google chrome browser.

So, this means our end users have different experience depending on the browser they use. What we want here is consistency. There are many third party Date-picker controls that we can use, to provide consistent experience to our end users. ngx-bootstrap datepicker control is one of them.

Please refer to the UI components section on the following page, to see the list of all third party UI components that we can use in Angular
https://angular.io/resources

Installing ngx-bootstrap : The following are the steps to install ngx-bootstrap

Step 1 : Execute the following command to npm install ngx-bootstrap
npm install ngx-bootstrap --save

Step 2 : If you do not have Bootstrap installed, please install it using the following npm command. If you are following along we have already installed bootstrap in Part 1 of this Angular CRUD tutorial. So I am not going to execute this command again.
npm install bootstrap@3 --save

Please note : We are usng Bootstrap 3. We can also use Bootstrap 4 with ngx-bootstrap. Please refer to the documentation available at the following link on how to use Bootstrap 4 with ngx-bootstrap.
https://valor-software.com/ngx-bootstrap/#/getting-started

Step 3 : Once Bootstrap is installed, open .angular-cli.json file and specify the path to the Bootstrap stylesheet (bootstrap.min.css) in the styles property as shown below. Again, we have already done this

"styles": [
"../node_modules/bootstrap/dist/css/bootstrap.min.css",
"styles.css"
]

Using ngx-bootstrap datepicker in Angular : The following are the steps to use ngx-bootstrap datepicker in Angular

#Step 1 : In app.module.ts file, include the following import statement to import BsDatepickerModule
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

Also, include BsDatepickerModule in the imports array of @NgModule decorator as shown below
@NgModule({
imports: [BsDatepickerModule.forRoot(),...]
})

#Step 2 : In "create-employee.component.html" file, make the following 2 changes to the HTML that displays the "Date of Birth" field
Change the "type" attribute value from "date" to "text"
Include "bsDatepicker" directive on the input element

<div class="form-group">
  <label for="dateOfBirth">Date of Birth</label>
  <input id="dateOfBirth" name="dateOfBirth" [(ngModel)]="dateOfBirth"
          type="text" bsDatepicker class="form-control" />
</div>

#Step 3 : Include a reference to the bs-datepicker.css file in .angular-cli.json file.

"styles": [
"../node_modules/bootstrap/dist/css/bootstrap.min.css",
"../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
"styles.css"
]

At this point when you view the page in Google chrome or Firefox, you get the same datepicker and hence the same experience.

When we select a date from the date-picker control, the "Date of Birth" textbox is automatically populated with the selected date and it is also captured by the angular generated form model.

With this datepicker control, it is also very easy to capture a date range. For example, you have an open job role, and you want to capture a date range for accepting CV's, we can very easily do this. All we have to do is use bsDaterangepicker directive instead of bsDatepicker directive on the input element as shown below.

<div class="form-group">
  <label for="dateOfBirth">Date of Birth</label>
  <input id="dateOfBirth" name="dateOfBirth" [(ngModel)]="dateOfBirth"
          type="text" bsDaterangepicker class="form-control" />

</div>

The above simple change, will display Daterange picker as shown below. When we select a date range, the corresponding input field is automatically populated with the selected date range and it is also captured by the angular generated form model.

At the moment, the Datepicker is using the default green theme. We want to change it to dark-blue theme, so it matches with the rest of the form.
The date is captured in the textbox in mm/dd/yyyy format. We want to change it to dd/mm/yyyy format
At the moment there is no default date. We want to set a default date
The input element is spanning across the entire width of the form. We want to limit it's width
Datepicker is a highly configurable component

#12 customising the ngx-bootstrap datepicker component with an example.

Changing ngx-bootstrap datepicker theme : At the moment, the Datepicker is using the default green theme. We want to change it to dark-blue theme, so it matches with the rest of the form. As of this recording ngx-bootstrap datepicker component has the following 6 color schemes.
theme-default
theme-green
theme-blue
theme-dark-blue
theme-red
theme-orange

We can change the default colour-scheme, by manipulating containerClass property in bsConfig object.

Showing or hiding week numbers : By default, the weeknumber are displayed. If you want to hide them, all you have to do is set "showWeekNumbers" boolean property to false in the config object.

constructor() {
this.datePickerConfig = Object.assign({},
{
containerClass: 'theme-dark-blue',
showWeekNumbers: false
});
}

You can find all the properties of the config object at the following page.
https://github.com/valor-software/ngx...

Along the same lines we can also set the min and max dates. Please note that the month numbers start from 0 and not 1. So for January it is 0, February it is 1, so on and so forth.
constructor() {
this.datePickerConfig = Object.assign({},
{
containerClass: 'theme-dark-blue',
showWeekNumbers: true,
minDate: new Date(2018, 0, 1),
maxDate: new Date(2018, 11, 31),
});
}

To change the date format, use dateInputFormat property of the config object.

constructor() {
this.datePickerConfig = Object.assign({},
{
containerClass: 'theme-dark-blue',
showWeekNumbers: true,
minDate: new Date(2018, 0, 1),
maxDate: new Date(2018, 11, 31),
dateInputFormat: 'DD/MM/YYYY'
});
}

To set a default date, create a property (dateOfBirth) in the component class and set it to the default value you want. Since we are using 2 way databinding, the defualt date is displayed in the corresponding input field when them form loads. In this case we have set default date to January 30, 2018.
dateOfBirth: Date = new Date(2018, 0, 30);

At the moment, the "Date of Birth" input element is spanning across the entire width of the form. There are sevral options to limit it's width. One option is to use the Bootstrap row and grid classes (Example: col-md-4, col-md-5, etc...)

To control the placement of the Datepicker use the placement property. The allowed values are "top" | "bottom" | "left" | "right". The default is "bottom".

#13
Angular ngIf structural directive with an example
How to prevent a button from submitting form

Here is what we want to do : When the Create Employee form first loads, we want to display a field to enter "Photo Path" and "Show Preview" button

For now, we will assume employee photo is already available in the assets/images folder. We will discuss uploading files in a later video in this series.

Once the user has typed the photo path in the respective field, and when they click "Show Preview" button, we want to display the photo and the text on the button should change to "Hide Preview".

At this point when the employee clicks "Hide Preview" button, the photo should be hidden and the text on the button should change again back to "Show Preview".

Here are the steps to achieve this

Step 1 : First include an input field for capturing employee photo path. As we have set both the name property and ngModel directive to photoPath, Angular generated form model will create a property with name "photoPath" and keeps track of what is typed in the photoPath textbox.

<div class="form-group">
  <label for="photoPath">Photo Path</label>
  <input id="photoPath" type="text" class="form-control"
          name="photoPath" [(ngModel)]="photoPath">
</div>

Step 2 : Include image element to preview the employee photo. Notice we have set height and width to 200 pixles. Also notice we are binding the img element src property to the photoPath property.

<div class="form-group">
  <img [src]="photoPath" height="200" width="200" />
</div>

With the above 2 changes in place, view the page in the browser and launch browser developer tools. On the console tab, you will see the following error. This is because, when the form loads, photoPath property is null and we have bound it to the src property of the img element.
Failed to load resource: the server responded with a status of 404 (Not Found)

At this point, as you start to type in the "Photo Path" textbox, you will see a 404 error logged to the console every time you type a character. This is because every time a character is typed, angular tries to bind the src property of the image element to the photoPath property, Since we have not completed typing the full valid photo path, Angular is not able to find the image and it logs a 404 error to the console. Once we complete typing the valid photo path, the photo is displayed.

Step 3 : We do not want to render the image element when the form first loads. So create a boolen property with name previewPhoto in the CreateEmployeeComponent class and initialise it to false.

previewPhoto = false;

Step 4 : In the view template (i.e in create-employee.component.html) file, include *ngIf structural directive on the image element. Notice the expression assigned to *ngIf directive. It is the boolean property (previewPhoto) we created in the component class. If the value of the expression is truthy then the image element is rendered in the DOM otherwise it is not. Since we have initialised previewPhoto with false, the image element will not be rendered when the form is initially loaded.

<img [src]="photoPath" height="200" width="200" \*ngIf="previewPhoto"/>

At this point, view the page in the browser and launch browser developer tools. On the console tab, you will not see any errors on the initial form load. Also, when you start to type in the Photo Path field, you do not see any 404 errors in spite of having the img element bound to photoPath property. This is because the \*ngIf structural directive prevented the img element from being added to the DOM as it's value is falsy.

Step 5 : Now we need to include a button to Show and Hide Image Preview. In the view template, include the following HTML.

<div class="form-group">
  <button (click)="togglePhotoPreview()" class="btn btn-primary">
    {{previewPhoto ? "Hide " : "Show " }} Preview
  </button>
</div>

Code explanation :
On the button click, we are calling "togglePhotoPreview()" method. This is event binding. We discussed Event Binding in Part 14 of Angular 2 tutorial.
We have not created togglePhotoPreview() method. We will create it in out next step.
We are using the Bootstrap btn and btn-primary classes for styling
We are using interpolation to dynamically change the button text.
Step 6 : In the component class, create togglePhotoPreview() method. Notice this method toggles the value of previewPhoto property.

togglePhotoPreview() {
this.previewPhoto = !this.previewPhoto;
}
At this point, view the page in the browser and launch browser developer tools. Type a valid photo path and click "Show Preview" button.
The image will be displayed and the text on the button changes to "Hide Privew" as expected.
If you look on the console tab, you will see that the Angular generated form model is logged to the console. We did not expect this to happen.
The code to log the employee form values is in the saveEmployee() method and this method should only be called when we click the "Save" button.
So the question that comes to our mind is, why is the form being submitted when we click "Show Preview" or "Hide Preview" button.
This is because of the way we have created the button. If we do not explicitly specify the button type attribute, the button behaves like the "Submit" button and hence the code in the "saveEmployee()" method is also executed.
To prevent this, explicitly set the type attribute of the button to "button". This prevents the button from behaving as a Submit button.

<div class="form-group">
  <button type="button" (click)="togglePhotoPreview()" class="btn btn-primary">
    {{previewPhoto ? "Hide " : "Show " }} Preview
  </button>
</div>

#14 disable browser native validation
By default Angular 4 and later versions disable browser native validation. How to enable browser validation using ngNativeValidate directive
How to explicitly disable the native browser validation using the novalidate attribute if you are using Angular 2.
Why is it better to disable browser built-in validation and use Angular to validate instead

To understand browser native validation,
On the "Create Employee" view template, include required attribute on FullName input field

Navigate to the "Create Employee" form and launch browser developer tools.

Do not type anything in the "Full Name" input field click the "Save" button.

Notice we do not get any validation, in spite of having required attribute on the "Full Name" input field.

This is because by default, Angular 4 and later versions disable browser validation by including novalidate attribute on the form tag.

To confirm this, click on the "Elements" tab in the browser developer tools and you will see "novalidate" attribute on the form tag

If you want to enable browser validation, include ngNativeValidate directive on the form tag in create-employee.component.html file

<form #employeeForm="ngForm" ngNativeValidate
      (ngSubmit)="saveEmployee(employeeForm)">

At this point, if you click the "Save" button without typing anything in the Full Name field, the native browser validation kicks in and you will see "Please fill in this field" validation error. At the moment I am using Google Chrome browser.

#15 Displaying angular form validation error messages
How to display validation error messages to the user
Style the error messages using Bootstrap 
How to disable Submit button if the form is not valid

This is continuation to Part 15. Please watch Part 15 from Angular CRUD tutorial before proceeding.


Here is what we want to do. If the "Full Name" field is not valid we want to style the input field with a red border. The associated label text should also turn red and "Full Name is required" validation error message should be displayed.

Once we type something in the Full Name field, and when it becomes valid, the validation message and the red broder should disappear and also the label text should return to it's normal black colourcolour.

We will be using the Bootstrap framework for styling validation error messages. If you are new to Bootstrap, please check out our Bootstrap tutorial by clicking here.

We discussed Bootstrap form validation states in Part 23 of Bootstrap tutorial. We will use the following Bootstrap classes for styling validation error messages.
has-error
control-label
help-block
Modify the "Full name" input filed as shown below.

<div class="form-group" [class.has-error]="fullNameControl.invalid">
  <label for="fullName" class="control-label">Full Name</label>
  <input id="fullName" required type="text" class="form-control" name="fullName"
         [(ngModel)]="fullName" #fullNameControl="ngModel">
  <span class="help-block" *ngIf="fullNameControl.invalid">
    Full Name is required
  </span>
</div>

Code explanation :
[class.has-error]="fullNameControl.invalid. This is class binding in angular. If the invalid property returns true, then the Bootstrap class has-error is added to the div element, if it is false then the class is removed.

On the "Full Name" label element we applied control-label Bootstrap class. This class turns the label text to red if there is a validation error.

*ngIf="fullNameControl.invalid". The *ngIf structural directive on the span element adds or removes the validation error message depending on the invalid property value. If the invalid property is true, then the validation error message is displayed, otherwise it is removed. Also, notice we are using the Bootstrap help-block class on the span element for styling.
At this point, save the changes and view the page in the browser. Notice when the form initially loads, we see the validation error message Full Name is required and it is also styled as expected. As we soon as we start typing, the error goes away. When we delete everything that we have typed, the error appears again. So, it's working as expected.

Let's enhance this a bit more. Some users does not like to see the validation error messages, even before they had the opportunity to touch the form field. So what we want to do is, 
Do not display any validation error messages when the form is initially loaded. 
When the user touches the field, and if he leaves the field without typing in the value, then we want to display the validation error message. 
This is easy. You might have already guessed we could use touched property to achieve this. So modify the Full Name field HTML as shown below. With this change, the validation error message is displayed only when the Full Name field is invalid and touched.

<div class="form-group"
     [class.has-error]="fullNameControl.invalid && fullNameControl.touched">
  <label for="fullName" class="control-label">Full Name</label>
  <input id="fullName" required type="text" class="form-control" name="fullName"
         [(ngModel)]="fullName" #fullNameControl="ngModel">
  <span class="help-block"
        *ngIf="fullNameControl.invalid && fullNameControl.touched">
    Full Name is required
  </span>
</div>

To take this to the next level, we can style a valid field with a different colour. Here is what I mean.

When the form first loads, the Full Name and it's label are black in colour and the validation error message is not displayed
When the user touches the field and leaves it without typing anything, the colour changes to red and the validation error message is displayed
If the user types something, the field is valid, so we want a green border and the label text should also turn green.
To achieve this we can use the Bootstrap has-success class as shown below. As you can see, the has-success class is added when valid property is true and it is removed when it is false. 

<div class="form-group"
     [class.has-error]="fullNameControl.invalid && fullNameControl.touched"
     [class.has-success]="fullNameControl.valid">

As you can see these angular validation properties (valid, touched, dirty etc.) provide lot of power and flexibility when validating form fields and displaying validation error messages.

How to disable Submit button if the form is not valid : To disable the "Save" button when the form is not valid, bind the invalid property of the employeeForm template variable to the disabled property of the button.

<button class="btn btn-primary" type="submit"
[disabled]="employeeForm.invalid">Save</button>



#17 Model binding in angular template

Binding Angular form to our own model class
We will also discuss, how to fix one of the common error that we get when exporting ngModel into a local variable. The error that we get is, cannot assign to a reference or variable.

At the moment, in CreateEmployeeComponent we are using the Angular Auto-generated form model. Instead of using the Angular generated form model, we can use our model class.


In employee.model.ts file in the models folder, we have Employee class. We want to use this class as the model when creating a new employee. Here are the steps.

Step 1 : In create-employee.component.ts file, import the Employee model
import { Employee } from '../models/employee.model';

Step 2 : In CreateEmployeeComponent class, include employee property. Notice we have set the type to Employee and initialised all properties with NULL value.

export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

Step 3 : In the view template, bind the ngModel directive of an input field to it's corresponding property on the employee object. The employee property we created in Step 2 returns an employee object, which is the model for our form.

For example, bind ngModel directive on the email input field to the email property on the employee object.
[(ngModel)]="employee.email"

Except fullName, bind the ngModel directive of the rest of the input fields with the corresponding properties on the employee object.

In the employee class we do not have fullName property. we have name instead. On the view template, the corresponding input field name is fullName. To keep things consistent let's change fullName to name on the label and the input field as shown below.

<div class="form-group" [class.has-error]="name.invalid && name.touched">
  <label for="name" class="control-label">Name</label>
  <input id="name" required type="text" class="form-control" name="name"
         [(ngModel)]="name" #name="ngModel">
  <span class="help-block" *ngIf="name.invalid && name.touched">
    Name is required
  </span>
</div>

At this point, if you view the page in the browser, you will see the following error.
Cannot assign to a reference or variable

We get this error because, Angular generated form model creates name property and we are also creating a local template variable with the same name by exporting ngModel to #name. Hence we get the error - Cannot assign to a reference or variable.

One way to fix this error is, by giving our local template reference variable a different name other than name. So if we change #name="ngModel" to #nameControl="noModel" the error goes away. We discussed this in detail in Part 15 of Angular CRUD tutorial.

The other way to fix this error is by using our own model. Using the ngModel directive, bind the name property of the employee object to the name input field

[(ngModel)]="employee.name"

At this point, if you view the page in the browser and notice the error is gone and all the properties in the Angular generated form model are NULL as expected.

To see our own employee model, include the following code in the view template file (create-employee.component.html)

Angular Generated Forom Model : {{employeeForm.value | json}}
<br/>
<br/>
Our Employee Model : {{ employee | json}}

At this point, on the browser we should see both - Angular generated form model and our own employee model. Notice as we change the values in the input fields, the respective properties in both the models are updated as expected.

At the moment, when we click the "Save" button, we are logging the employeeForm.value to the console. We instead want to log our employee model object. To do this 
In the view template, pass the employee object to the saveEmployee() method.

<form #employeeForm="ngForm" (ngSubmit)="saveEmployee(employee)">

Modify saveEmployee() method in create-employee.component.ts file as shown below.

saveEmployee(newEmployee: Employee): void {
  console.log(newEmployee);
}

At this point, when we click the Save button, the employee object is logged to the console as expected.