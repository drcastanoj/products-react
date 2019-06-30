import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/commons/header/header';
import { HomePage } from './components/home/home';
import { ClientsPage } from './components/clients/clients';
import { ContactPage } from './components/contact/contac';
import ProductsContainer from './components/products/productsContainer/productsContainer';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/clients" component={ClientsPage} />
                    <Route exact path="/contacts" component={ContactPage} />
                    <Route exact path="/products/:category?" component={ProductsContainer} />

                    {/* <Route component={PageNotFound} /> */}
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
