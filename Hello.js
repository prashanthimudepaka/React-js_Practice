import React from "react";
const Hello =()=> {//jsx return
    // return (<div className="classname"> 
    //     <h1>experimenting jsx</h1>
    // </div>)

//without jsx
// return React.createElement("div",null,React.createElement('h1',null,'hello prashanthi'))
return React.createElement("div",{id:'Hello',className:'hi'},
React.createElement('h1',null,'hello prashanthi'))

}
export default Hello;
