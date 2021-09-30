import React from 'react';
import ReduxTest from './ReduxTest.ts'
import {useSelector} from './ReactReduxBinding/Selector.ts'


interface IProps{
    reduxTest : ReduxTest
}

export const EditableList = (props : IProps) => {

    let list = useSelector(props.reduxTest.store, (state : any)=>state.value)

    const items = list.map((item : any)=>
            <li key={item.id}>
                {item.text}
                <button onClick={()=>props.reduxTest.remove(item.id)}>Delete</button>
            </li>
        );
    return <div>
        <ul>{items}</ul>
        <button onClick={()=>props.reduxTest.add("new item")}>Add</button>
    </div>;
 }