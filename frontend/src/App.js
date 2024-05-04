import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './LoginSignup/Login/Login';
import Signup from './LoginSignup/Signup/Signup';
import TicketReview from './TicketReview/TicketReview';
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
      },{
        path:"/TicketReview",
        element:<TicketReview/>
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
