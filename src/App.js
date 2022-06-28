import React from 'react';
import './App.css';
import Home from './Components/Home';
import MainNavigation from './Components/Navigation/MainNavigation';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import Work from './Components/Work';
import withSplashScreen from './Components/withSplashScreen';
import {Button1} from './Components/Button';
import TabsDemo from './Components/tabs/TabsDemo';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';


const App =()=>{
  const [currentTheme, setTheme] = React.useState("light");

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const applyTheme = nextTheme => {
    const theme = nextTheme === "dark" ? lightTheme : darkTheme;
    Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
    });
  };

  const lightTheme = {
    "--MainBackground": "#533E85",
    "--LightBackground": "#646FD4",
    "--Font1": "#DBDFFD",
    "--Font2": "#DBDFFD",
    "--Font3": "#DBDFFD",
  };
  const darkTheme = {
    "--MainBackground": "#EEEEEE",
    "--LightBackground":"#EDEEF7",
    "--Font1": "#7d6ca8",
    "--Font2": "#7d6ca8",
    "--Font3": "#7d6ca8"  };

    return (
      
    <div className="app" style={{height:'100%'}}>
   
    <Button1 className="t-btn" onClick={onClick}/>
    <MainNavigation/>
    <Sidebar />
    
      
      <Router>
      <Switch>
      <Route exact path="/"><Home/><About/><Work/></Route>
      <Route exact path="/gallery"><TabsDemo/></Route>
     </Switch>
    </Router>

      </div>
  );
  }

export default withSplashScreen(App);

