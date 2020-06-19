import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = (props) =>{
    return(
        <div>
            <header className="App-header">
                <Child></Child>
                <Child2></Child2>
            </header>
        </div>
        );
    }
    export default Parent;