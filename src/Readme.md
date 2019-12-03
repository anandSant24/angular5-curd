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
