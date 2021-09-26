import ReactDOM from 'react-dom';
import React from 'react';
import {StateCard} from './StateCard.tsx'
import {StateThingy} from './StateThingy'
import {EditableList} from './EditableList.tsx'

interface IProps {
    thing: StateThingy;
}

export const App = (props : IProps) => {
    return <div>
        <StateCard state={props.thing}></StateCard>
        <EditableList></EditableList>
    </div>;
 }