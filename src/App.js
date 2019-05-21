import React from 'react';
import './App.css';


function App() {
    return (
        <div className="App">
            <div className='container'>
                <div className="core nom a"><p>a</p></div>
                <div className="core nom l"><p>l</p></div>
                <div className="core nom e"><p>e</p></div>
                <div className="inverse nom x"><p>x</p></div>
            </div>
            <button onClick={() => changeMode}>CHANGE</button>

        </div>
    );
}

export default App;
