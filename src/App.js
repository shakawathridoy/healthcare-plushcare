import './App.css';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Menubar from './components/Shared/Menubar/Menubar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import Appoinment from './components/Appoinment/Appoinment';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Menubar></Menubar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home ></Home>
        </Route>
        <PrivateRoute exact path="/appoinment">
          <Appoinment></Appoinment>
        </PrivateRoute>
        <PrivateRoute exact path="/appoinment/:id">
          <Appoinment></Appoinment>
        </PrivateRoute>
        <Route exact path="/service">
          <Service></Service>
        </Route>
        <PrivateRoute exact path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/singin">
          <SingIn></SingIn>
        </Route>
        <Route exact path="/register">
          <SingUp></SingUp>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
