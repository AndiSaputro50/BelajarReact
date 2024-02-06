import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"; import './App.css';
import Json from './pages/json';
import Nav from './pages/nav';
import Home from './pages/home';
import Tentang from './pages/tentang';
import Menu from './pages/menu';
function App() {
  return (
    <>
    <Nav />
      <Json/>
    <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/tentang" component={Tentang} exact />
            <Route path="/menu" component={Menu} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;