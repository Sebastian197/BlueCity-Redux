import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Components 
import Contact from './components/contact';

// Styles Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// libraries 


const App = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Route
                    exact
                    path='/contact'
                    component={Contact}
                />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
