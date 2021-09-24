import ReactDOM from 'react-dom';
import React from 'react';
export const Counter = () => {
    const [state, setState] = React.useState('state');
    return <div>
        <span>{state}</span>
        <input onBlur={(e)=>{setState(e.target.value);} } />
    </div>;
 }