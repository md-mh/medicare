import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Nopage from "./Components/Common/Nopage/Nopage";
import Home from "./Components/Home/Home";
import Singleservice from "./Components/Home/Services/Singleservice/Singleservice";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Reviews from "./Components/Review/Reviews";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <PrivateRoute path="/service/:slug"><Singleservice></Singleservice></PrivateRoute>
          <Route path="/review"> <Reviews></Reviews> </Route>

          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
