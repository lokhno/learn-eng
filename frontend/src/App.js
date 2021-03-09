import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, Registration, Auth } from "./pages";

import "./App.scss";

function App() {
    const user = useSelector(({ user }) => {
        return user;
    });
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/registration"
                        render={() =>
                            !user.isAuth ? <Registration /> : <Redirect to="/" />
                        }
                    />

                    <Route
                        exact
                        path="/auth"
                        render={() => (!user.isAuth ? <Auth /> : <Redirect to="/" />)}
                    />
                    <Route
                        exact
                        path="/categories"
                        render={() => (user.isAuth ? <Home /> : <Redirect to="/auth" />)}
                    />

                    <Route
                        exact
                        path="/learn"
                        render={() => (user.isAuth ? <Home /> : <Redirect to="/auth" />)}
                    />

                    <Route
                        path={["/", "/words"]}
                        render={() => (user.isAuth ? <Home /> : <Redirect to="/auth" />)}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
