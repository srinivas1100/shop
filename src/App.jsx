import Homescreen from "./screens/homescreen.jsx";
import Productscreen from "./screens/productscreen.jsx";
import Cartscreen from "./screens/cartscreen.jsx";
import Login from "./screens/login.jsx";
import Register from "./screens/register.jsx";
import Productsscreen from "./screens/productsscreen.jsx";
import dotenv from "dotenv";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Success from "./screens/success.jsx";

dotenv.config();

function App() {
    const user = true;
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Homescreen />
                    </Route>
                    <Route path="/products">
                        <Productsscreen />
                    </Route>
                    <Route path="/product/:id">
                        <Productscreen />
                    </Route>
                    <Route path="/cart">
                        <Cartscreen />
                    </Route>
                    <Route path="/success">
                        <Success />
                    </Route>
                    <Route path="/login">
                        {user ? <Redirect to="/" /> : <Login />}
                    </Route>
                    <Route path="/register">
                        {user ? <Redirect to="/" /> : <Register />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;