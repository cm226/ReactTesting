import ReactDOM from 'react-dom';
import React from 'react';
import {StateThingy} from './StateThingy'
import ReduxTest from './ReduxTest.ts'
import {useSelector} from './ReactReduxBinding/Selector.ts'

interface IProps {
    state: StateThingy | undefined
}

let reduxTest = new ReduxTest();

export const EditableList = (props : IProps) => {

    let list = useSelector(reduxTest.store, (state)=>state.value)

    const items = list.map((item)=>
            <li key={item.id}>{item.text}</li>
        );
    return <div>
        <ul>{items}</ul>
        <button onClick={()=>reduxTest.add("new item")}>Add</button>
    </div>;
 }