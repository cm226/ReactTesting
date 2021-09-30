import {createStore} from 'redux'
import { Stats } from 'webpack';

class ReduxTest {

    private store : any;

    constructor(){
        const initialState = {
            value: [
                {id : 0, text : 'first text', checked  : true}
            ],
            nextID : 1
        };

        function reducer(state = initialState, action) {
            switch (action.type) {
            case "list/add":
                state.value.push({id : state.nextID, text : action.payload, checked : true})
                return {
                    ...state,
                    nextID : ++state.nextID,
                 }
            case "list/remove":
                let itemIndex = state.value.findIndex((item)=>item.id == action.payload);
                state.value.splice(itemIndex,1);
                return state;
            default:
                return state;
            }
        }

        this.store = createStore(reducer);
    }

    public add(message : string){
        this.store.dispatch({ type: "list/add", payload : message });
    }

    public remove(id : number){
        this.store.dispatch({ type: "list/remove", payload : id });
    }

    public get Store(){
        return this.store;
    }

}

export default ReduxTest;