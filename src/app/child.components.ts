import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './app.component.child.html',
    styleUrls: ['./app.component.child.scss']
})

export class ChildComponent {
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any){
        this.onChanged.emit(increased);
    }
}