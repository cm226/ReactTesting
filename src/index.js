import ReactDOM from 'react-dom';
import React from 'react';
import {Counter} from './Counter.tsx'
const App = () => {
    return <div>
        <h1>This is my React app! hello</h1>
        <Counter></Counter>
    </div>;
 }
ReactDOM.render(<App />, document.getElementById('app'));