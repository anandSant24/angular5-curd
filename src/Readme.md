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

<img [src]="photoPath" height="200" width="200" *ngIf="previewPhoto"/>

At this point, view the page in the browser and launch browser developer tools. On the console tab, you will not see any errors on the initial form load. Also, when you start to type in the Photo Path field, you do not see any 404 errors in spite of having the img element bound to photoPath property. This is because the *ngIf structural directive prevented the img element from being added to the DOM as it's value is falsy. 

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