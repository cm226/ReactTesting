import ReactDOM from 'react-dom';
import React from 'react';
import {StateThingy} from './StateThingy'
import ReduxTest from './ReduxTest.ts'

interface IProps {
    state: StateThingy | undefined
}

let reduxTest = new ReduxTest();

export const EditableList = (props : IProps) => {

    const [state, setState] = React.useState(reduxTest.Store.getState());
    reduxTest.Store.subscribe(()=>{setState(reduxTest.Store.getState())});

    const items = state.value.map((item)=>
            <li key={item.id}>{item.text}</li>
        );
    return <div>
        <ul>{items}</ul>
        <button onClick={()=>reduxTest.add("new item")}>Add</button>
    </div>;
 }