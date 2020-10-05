import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";

import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Nav";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path={["/"]}>
                        <Main />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>

                <br></br>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
