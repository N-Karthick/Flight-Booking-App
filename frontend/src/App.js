import { BrowserRouter as Router, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './LoginSignup/Login/Login';
import Signup from './LoginSignup/Signup/Signup';
function App() {
  const route = createBrowserRouter([
      {
        path:"/flights",
        element:<Home/>
      },{
        path:"/Login",
        element:<Login/>
      },{
        path:"/Signup",
        element:<Signup/>
      }
    ])
return (
  <div>
    <RouterProvider   router={route}>
<Router>

</Router>
</RouterProvider>
</div>
);
}
export default App;
