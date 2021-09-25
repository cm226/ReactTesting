export class StateThingyImp{

    constructor(){
        this._observers = [];
        this._state = '';
    }

    SetState(newState){
        this._state = newState;
        this._observers.forEach((fn)=>{
            fn(newState);
        });
    }
    GetState(){
        return this._state;
    }
    Changed(callback){
        this._observers.push(callback);
    }
    
}