import { BrowserRouter as Router, Route, Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
function App() {
  const route = createBrowserRouter([
      {
        path:"/flights",
        element:<Home/>
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
