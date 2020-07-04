export class Task3User {
    name:string;
    age:number;
    constructor( nameToSet:string, ageToSet:number){
        this.name = nameToSet;
        this.age = ageToSet;
    }
    isFullAged(){
        return this.age>17;
    }
}