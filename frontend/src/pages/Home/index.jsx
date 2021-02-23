import React from "react";

import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavMenu, Words, Categories, Learn } from "../../components";
import { Auth, Registration } from "../";

import "./Home.scss";

const Home = () => {
    return (
        <Router>
            <Route exact path="/auth">
                <Auth />
            </Route>
            <Route exact path="/registration">
                <Registration />
            </Route>
            <Layout className="layout">
                <NavMenu />
                <Switch>
                    <Route exact path="/categories">
                        <Categories />
                    </Route>
                    <Route exact path="/learn">
                        <Learn />
                    </Route>

                    <Route path={["/", "/words"]}>
                        <Words />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default Home;
