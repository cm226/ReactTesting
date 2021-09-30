import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './ReactComponent.tsx';
import {StateThingy} from './StateThingy'
import css from './App.css'

const style = document.createElement('style');
style.type="text/css";
style.appendChild(document.createTextNode(css));

export default class ReactWebComponent extends HTMLElement {

  private mountPoint : HTMLDivElement | undefined;

  createApp(stateThing : StateThingy | undefined = undefined) {
    return React.createElement(App, { thing : stateThing });
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.mountPoint.id = "root";
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);
    shadowRoot.appendChild(style.cloneNode(true));

    ReactDOM.render(this.createApp(), this.mountPoint);
  }

  public setState(stateThing : StateThingy) {
      ReactDOM.render(this.createApp(stateThing), this.mountPoint);
  }

}

window.customElements.define('react-app', ReactWebComponent);