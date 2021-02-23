import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Registration, Auth } from "./pages";

import "./App.scss";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/registration">
                        <Registration />
                    </Route>
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                    <Route exact path="/categories">
                        <Home />
                    </Route>
                    <Route exact path="/learn">
                        <Home />
                    </Route>
                    <Route path={["/", "/words"]}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
