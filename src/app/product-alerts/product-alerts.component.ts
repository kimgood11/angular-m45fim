import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent  {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}


//angular.io/license 
//The @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.
//To set up ProductAlertsComponent to receive product data, first import Input from @angular/core. = import { Input } from '@angular/core';

//In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent. = @Input() product;


//To make the Notify Me button work, the child component needs to notify and pass the data to the parent component. The ProductAlertsComponent needs to emit an event when the user clicks Notify Me and the ProductListComponent needs to respond to the event. In product-alerts.component.ts, import Output and EventEmitter from @angular/core. = import { Output, EventEmitter } from '@angular/core';

//In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes. = @Output() notify = new EventEmitter();

// In new components, the Angular Generator includes an empty constructor(), the OnInit interface, and the ngOnInit() method. Since these steps don't use them, the following code example omits them for brevity. From = export class ProductAlertsComponent implements OnInit  {, to = implements OnInit//

//
