import { Subject, Observable, map } from 'rxjs';


export class RXJSTest{

    public getNewImage : Subject<string>;
    
    constructor(){
        this.getNewImage = new Subject<string>();
        this.getNewImage = this.getNewImage.pipe(map((x:string) => "mapped : "+ x))
    }

    public fetch(){
        this.getNewImage.next(new Date().toString());
    }



}


