import React from 'react';

import GlobalStyle from './shared/styles/global';
import {Home} from "./pages/home";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Home />
        </div>
    );
}

export default App;
