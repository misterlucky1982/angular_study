import {Directive, ElementRef} from '@angular/core';
 
@Directive({
    selector: '[bold]'
})
export class FontBoldDirective{
     
    constructor(private elementRef: ElementRef){
         
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}