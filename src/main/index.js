import {StateThingyImp} from './StateThingyImp'
import {RXJSTest} from './rxjstest.ts'

window.setTimeout(()=>{

    let state = new StateThingyImp();
    // document.getElementById("app1").setState(state);
    // document.getElementById("app2").setState(state);

    let rx_test = new RXJSTest();
    rx_test.getNewImage.subscribe((evn)=>console.log("1" + evn));
    rx_test.getNewImage.subscribe((evn)=>console.log("2"+evn));
    rx_test.getNewImage.subscribe((evn)=>console.log("3"+evn));

    window.setTimeout(()=>{rx_test.fetch()}, 100);

}, 100);