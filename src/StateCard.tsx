import ReactDOM from 'react-dom';
import React from 'react';
import './StateCard.scss'
import {StateThingy} from './StateThingy'

interface IProps {
    state: StateThingy | undefined
}

export const StateCard = (props : IProps) => {

    if(props.state === undefined) return <div/>;


    const [state, setState] = React.useState(props.state.GetState());
    
    props.state.Changed((newState)=>{setState(newState);})

    return <div className="card">
        <div>
            <span>My state is : {state}</span>
        </div>
        <div>
            <p>set new state:</p>
            <input defaultValue={state} onBlur={(e)=>{props.state.SetState(e.target.value);} } />
        </div>
        
    </div>;
 }