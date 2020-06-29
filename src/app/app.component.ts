import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicks: number = 0;
  array: Array<string> = ['first', 'second', 'third', 'fourth', 'fifth'];
  onChanged(increased:any){
    console.log("I am here");    
    increased==true?(this.clicks==4?this.clicks=0:this.clicks++):(this.clicks==0?this.clicks=4:this.clicks--);
        console.log(this.clicks);
    }
}
