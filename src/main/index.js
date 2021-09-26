import {StateThingyImp} from './StateThingyImp'

window.setTimeout(()=>{

    let state = new StateThingyImp();
    document.getElementById("app1").setState(state);
    document.getElementById("app2").setState(state);

}, 100);