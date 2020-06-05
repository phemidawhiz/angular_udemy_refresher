import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})

export class PersonsComponent {
    enteredPersonName = '';
    @Input() personList: string[];

    onCreatePerson() {
        console.log("Person created: ", this.enteredPersonName);
        this.enteredPersonName = '';
    }
}
