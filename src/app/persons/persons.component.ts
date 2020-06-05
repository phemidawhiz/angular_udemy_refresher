import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})

export class PersonsComponent {
    enteredPersonName = '';
    @Input() personList: string[];
    @Output() PersonCreate = new EventEmitter<string>()

    onCreatePerson() {
        console.log('Person created: ', this.enteredPersonName);
        this.PersonCreate.emit(this.enteredPersonName);
        this.enteredPersonName = '';

    }
}
