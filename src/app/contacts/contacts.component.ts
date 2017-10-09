import { Component } from '@angular/core'

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})

export class ContactsComponent {
    names:Array<string> = [
        'John',
        'Joan',
        'Micheal'
    ]

    isVisible:boolean = true;
}
