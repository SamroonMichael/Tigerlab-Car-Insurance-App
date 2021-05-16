import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard';
import PersonalDetails from './components/formSteps/Personal-details';
import CarDetails from './components/formSteps/Car-details';
import Completed from './components/Completed';


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Layout>
            <Route path="/personal-details" component={PersonalDetails} />
            <Route path="/car-details" component={CarDetails} />
            <Route path="/completed" component={Completed} />
            <Route path="/dashboard" component={Dashboard} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
