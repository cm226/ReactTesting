import ReactDOM from 'react-dom';
import React from 'react';
import {StateCard} from './StateCard.tsx'
import {StateThingy} from './StateThingy'

interface IProps {
    thing: StateThingy;
}

export const App = (props : IProps) => {
    return <div>
        <StateCard state={props.thing}></StateCard>
    </div>;
 }