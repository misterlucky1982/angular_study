import { Component } from '@angular/core';
import { Task3User } from './task3.user';

@Component({
    selector: 'task3',
    templateUrl: './task3.class.html',
    styleUrls: ['./task3.styles.css']
})

export class Task3Component{
    enteredName:string = "";
    currentName:string = null;
    enteredAge:string = "";
    currentAge:number = null;
    userList:Task3User[] = new Array();

    getUserNameToShow(){
        return this.currentName==null?"not entered":this.currentName;
    }
    getUserAgeToShow(){
        return this.currentAge==null?"not entered":this.currentAge;
    }
    getUserAge(){
        if(new RegExp('[0-9]$').test(this.enteredAge)){
            let n = new Number(this.enteredAge).valueOf();
            return n>0&&n<135?n:null;
        }else return null;
    }
    isAgeMatched(){
        let n = this.getUserAge();
        return n!=null&&n>0&&n<101;
    }
    isSubmitNameEnabled(){
        return new RegExp('^[a-z0-9A-Z_-]{3,15}$').test(this.enteredName);
    }
    isSubmitAgeEnabled(){
        return this.isAgeMatched();
    }
    isAddUserEnabled(){
        return this.currentName!=null&&this.currentAge!=null;
    }
    typeName(line:string){
        this.enteredName=line;
    }
    typeAge(line:string){
        this.enteredAge=line;
    }
    submitName(){
        this.currentName = this.enteredName;
        this.enteredName = "";
    }
    submitAge(){
        this.currentAge = this.getUserAge().valueOf();
        this.enteredAge = "";
    }
    createNewUser(){
        this.userList.push(new Task3User(this.currentName,this.currentAge));
        this.currentName = null;
        this.currentAge = null;
        this.enteredAge = "";
        this.enteredName = "";
    }
    deleteUser(user:Task3User){
        console.log(this.userList.indexOf(user));
        this.userList.splice(this.userList.indexOf(user),1);
        console.log(this.userList);
    }
}