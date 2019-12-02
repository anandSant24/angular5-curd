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

http://csharp-video-tutorials.blogspot.com/2017/12/angular-forms-tutorial.html