import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Route } from 'react-router-dom';
import LOGO from'./LOGO.jpg';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import Display from'./Display';
import Conservation from'./Conservation';
import Elem from'./Elem';
import Villlas from'./Villlas';
import LoginPage from'./LoginPage.js';
import withAuth from './withAuth';

import Update from'./Update';
import Add from'./Add';
import FormPage from'./log';

import { BrowserRouter } from 'react-router-dom';
import { relative } from 'path';
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 3,
          width:2
      }}
  />
);

class App extends React.Component {

  state = {
    v: 7,
    appear:false,
    cls: 'row',
  
  }
  
  changeStyle() {
    //alert('dd');

    let v = this.dropdown.style.display;
    //alert (" "+v+" ,:"+nv)
    let nv = (v === 'block') ? 'none' : 'block';

    this.dropdown.style.display = nv;
    //let vert = !this.state.vert;
    //let cls = !vert ? 'block' : 'none';
    //this.setState({vert:vert,cls:cls})


  }
    render() {
      let cls = this.state.cls; //?
      const STH =withAuth(Add);
      const Projects = withAuth(Update);
      return (
        <Router>
        <div className="App">
          <ul className='nav'  >
            <li style={{ display: cls ,height:60,width:60,paddingTop:11}}>
              <img src={LOGO}></img>

            </li>
            <li  style={{ display: cls,paddingTop:20,paddingLeft:20 }}>
              
              <NavLink to="/" exact activeStyle={
                { color: 'green' }
              }>Home</NavLink>
            </li >
            <li  style={{ display: cls,paddingTop:20,paddingLeft:20 }}>
              <NavLink to="/About" exact activeStyle={
                { color: 'green' }
              }>About</NavLink>
              
            </li >
            <li style={{ display: cls ,paddingTop:20}}>
              <NavLink to="/LoginPage" exact activeStyle={
                { color: 'green' }
              }>Dashboard-App2</NavLink>
            </li>
            <li style={{ display: cls ,paddingTop:20}}>
              <NavLink to="/Update/villa" exact activeStyle={
                { color: 'green' }
              }>Update</NavLink>
            </li>
            <li style={{ display: cls ,paddingTop:20}}>
            
            </li>
            <li style={{ display: cls,paddingTop:20 }}>
              <NavLink to="/Display" exact activeStyle={
                { color: 'green' }
              }>Display</NavLink>
            </li>

            <li  className="hideColor"style={{ display: cls,paddingTop:20 }}  >
              
              <NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>Projects</NavLink>
             <div style={{position:relative,height:"50",width:"50"}}>
            <ul className="subNav" >
               <li style={{ display: cls}} ><NavLink to="/Conservation" exact activeStyle={
                { color: 'green' }
              }>CONSERVATION</NavLink>
              
            </li>
            <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>EDUCATIONAL</NavLink>
               </li>
               <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>HOTELS</NavLink>
               </li>
               <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>PLANNING</NavLink>
               </li>
               <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>LANDSCAPING</NavLink>
               </li>
                <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>PUBLIC</NavLink>
               </li>
               <li style={{ display: cls}} ><NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }>INDUSTRIAL</NavLink>
              
            </li> 
            <li style={{ display: cls}} ><NavLink to="/Villlas/INTERIOR_DESIGN" exact activeStyle={
                { color: 'green' }
              }>INTERIOR DESIGN</NavLink>
              
            </li> 
            <li style={{ display: cls}} ><NavLink to={{pathname:"/Villlas/Villa",type:"Villa"}} exact activeStyle={
                { color: 'green' }
              }>VILLAS</NavLink>
              
            </li> 
             </ul>
             </div>
            </li>
            
            <li style={{ display: cls ,paddingTop:20}}>
              <NavLink to="/Update" exact activeStyle={
                { color: 'green' }
              }><img style={{width:16,height:16}}src=" https://www.iconfinder.com/icons/291786/download/png/256"></img></NavLink>
            </li>
          
          </ul >
          <Route path="/" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <Home />
            }
          } />
          <Route path="/About" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <LoginPage />
            }
          } />
            <Route path="/LoginPage" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <LoginPage />
            }
          } />
          <Route path="/Contact" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <Contact />
            }
          } />
          <Route path="/Display" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <Display />
            }
          } />
           <Route path="/Home" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <Home />
            }
          } />
              <Route path="/Conservation" exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return <Conservation />
            }
          } />
         
           
          <Route exact path="/Villlas/:type" render={(props) => <Villlas  {...props} /> } />

          <Route exact path="/Villlas/Elem/:id" render={(props) => <Elem  {...props} /> } />

          <Route exact path="/Update/:type" render={(props) => <Projects  {...props} />  } />
          <Route exact path="/Add" render={(props) => <STH/>  } />

     {/*    <Route path="/Add"  exact strict render={
            () => {
              //return ( <div><h1>Welcome Home</h1>  <Login /></div>);
              return withAuth(Add);
            }
          } />
        */}
          
        </div>
      </Router>
      );
    }
  }
export default App;
