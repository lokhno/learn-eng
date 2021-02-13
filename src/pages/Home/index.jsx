import React from "react";

import { Layout } from "antd";

import { NavMenu, Words, Categories } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Home.scss";

const Home = () => {
    return (
        <Router>
            <Layout className="layout">
                <NavMenu />
                <Switch>
                    <Route exact path="/categories">
                        <Categories />
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
