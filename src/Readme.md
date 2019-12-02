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

#8
