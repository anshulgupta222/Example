import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'practise',
  template: `
    <h2>{{ Name }}</h2>
    <input type="text" (keyup.enter)="hello($event)" />
    <p>Hi {{ append }}</p>

    <input type="text" #text (keyup.enter)="bye(text)" />
    <p>Bye {{ appendText }}</p>

    <input type="text" [(ngModel)]="showText" (keyup.enter)="displayText()" />
    <p>{{ showText }}</p>

    <img [src]="imgUrl" /><br />
    <button
      [ngStyle]="currentStyles"
      style="background-color: {{ bgcolor }};"
      (click)="show()"
    >
      Show
    </button>
    <br /><br />
    <button [style.background-color]="bgcolor" (click)="hide()">Hide</button>
    <div *ngIf="currentCustomer">Hello, {{ currentCustomer }}</div>
    <div *ngFor="let name of userName">{{ name }}</div>
    Form Control :
    <input
      type="text"
      name="myFormControl"
      [formControl]="myFormControl"
      (keyup.enter)="displayReactiveForm()"
    />
    Template Form :
    <input
      type="text"
      [(ngModel)]="myTemplateForm"
      (keyup.enter)="displayTemplateForm()"
    />
  `,
})
export class PractiseComponent {
  Name: String = 'Anshul';
  showText: string = 'Anshul';
  append: string = '';
  appendText: string = '';
  imgUrl: string = '';
  bgcolor: string = 'lightblue';
  currentCustomer: string = '';
  currentStyles: Record<string, string> = {};
  userName: string[] = ['Anshul', 'Digvijay', 'Harsh', 'Tejas'];

  hello($event: Event): void {
    this.append = ($event.target as HTMLInputElement).value;
    console.log(this.append);
  }
  bye(text: any): void {
    this.appendText = text.value;
    console.log(this.appendText);
  }
  displayText(): void {
    console.log(this.showText);
  }

  show(): void {
    this.imgUrl =
      '../assets/img/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg';
  }
  hide(): void {
    this.imgUrl = '';
  }
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px',
    };
  }
  ngOnInit() {
    this.setCurrentStyles();
  }

  myFormControl = new FormControl('');
  displayReactiveForm():void {
    console.log(this.myFormControl.value);
    this.myFormControl.setValue('Anshul Gupta');
    console.log(this.myFormControl.value);
    console.log(this.myFormControl);
  }

  myTemplateForm = '';
  displayTemplateForm():void{
      console.log(this.myTemplateForm);
  } 
}
