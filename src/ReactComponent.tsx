import ReactDOM from 'react-dom';
import React from 'react';
import {StateCard} from './StateCard.tsx'
import {StateThingy} from './StateThingy'
import {EditableList} from './EditableList.tsx'
import ReduxTest from './ReduxTest.ts'

//import css from './App.module.css';

//console.log(css);

interface IProps {
    thing: StateThingy;
}

export const App = (props : IProps) => {
    return <div>
        <StateCard state={props.thing}></StateCard>
        <EditableList reduxTest={new ReduxTest()}></EditableList>
        <EditableList reduxTest={new ReduxTest()}></EditableList>
        <h1 className="red">Amired?</h1>
        <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <p className="text-xl leading-tight">Adam Wathan</p>
              <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
            </div>
          </div>
        </div>
      </div>


    </div>;
 }