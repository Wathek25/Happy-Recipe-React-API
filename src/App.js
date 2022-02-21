import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import MealsC from "./Pages/Meals";
import MealC from "./Pages/Meal";
import oneCategory from "./Pages/oneCategory";
import NavbarC from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meals" component={MealsC} />
        <Route path="/meals/meal/:idMeal" component={MealC} />
        <Route path="/about" component={About} />
        <Route path="/categories/:category" component={oneCategory} />
        <Route path="/*" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
