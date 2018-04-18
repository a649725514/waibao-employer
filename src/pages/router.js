import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './main';
//import App from '../App';
import Navbar from '../component/navbar';
import Message from './message';
import Message2 from './message2';
import Main2 from './main2';
import Contact from './contact';
import Contact2 from './contact2';
import Selfmessage from './selfmessage';
import Tasks from "./tasks";
import Projects from './projects';
import Otherprojects from './otherprojects';
import Othermessage from './othermessage';
import Othertasks from './othertasks';
import Employermessage from './employermessage';
import Piechart from './piechart';
import Error from './e404';
import Login from './login';
import Addproject from './addproject';
import Addtask from './addtask';
import Changetask from './changetask';
import Changeproject from './changeproject';
import Setting from './setting';
const {ipcRenderer} = window.electron;

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
//const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path:"/message",
    component: Message,
  },
  {
    path:"/message2",
    component: Message2,
  },
  {
    path:"/main",
    component: Main,
  },
  {
    path:"/main2",
    component: Main2,
  },
  {
    path:"/contact",
    component: Contact,
  },
  {
    path:"/contact2",
    component: Contact2,
  },
  {
    path:"/selfmessage",
    component: Selfmessage,
  },
  {
    path:"/tasks/:id/:taskContent/:date0/:date1/:date2/:date3/:project/:date/:taskname/:stars/:time/:name/:duty/:tele/:email",
    component: Tasks,
  },
  {
    path:"/othertasks",
    component: Othertasks,
  },
  {
    path:"/projects/:id/:projectContent/:date/:projectname/:stars/:time/:name/:duty/:tele/:email",
    component: Projects,
  },
  {
    path:"/otherprojects",
    component: Otherprojects,
  },
  {
    path:"/othermessage/:id",
    component: Othermessage,
  },
  {
    path:"/employermessage/:id",
    component: Employermessage,
  },
  {
    path:"/error",
    component: Error,
  },
  {
    path:"/login",
    component: Login,
  },
  {
    path:"/piechart",
    component: Piechart,
  },
  {
    path:"/addproject",
    component: Addproject,
  },
  {
    path:"/addtask",
    component: Addtask,
  },
  {
    path:"/changetask",
    component: Changetask,
  },
  {
    path:"/changeproject",
    component: Changeproject,
  },
  {
    path:"/setting",
    component: Setting,
  }
  // {
  //   path: "/sandwiches",
  //   component: Sandwiches
  // },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
function IsLogined(){
  if(ipcRenderer.sendSync('get_mine_token', 'please')==""){  
    return <Login /> 
  }else{  
    return <div>{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}</div>
  }  
}
const RouteConfigExample = () => (
  <Router>
    <div style={{
        width:document.body.clientWidth,
        height:document.body.clientHeight,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }}>
      {/* <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul> */}
      <Navbar />
      <IsLogined />
    </div>
  </Router>
);

export default RouteConfigExample;