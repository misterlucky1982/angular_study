import { Component } from '@angular/core';
       
@Component({
    selector: 'app-comp',
    templateUrl: './app.component.html'
})
export class AppComponent{ 
    enteredText:string = "";
     userName:string = null;
     getUserNameToShow(){
         return this.userName!=null?this.userName:"not entered";
     }
     isSubmitButtonEnabled(){
         return this.enteredText.length>0;
     }
     type(line:string){
         this.enteredText=line;
     }
     submit(){
         this.userName=this.enteredText;
         console.log(this.userName);
         this.enteredText = "";
     }
}