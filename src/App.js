
import {BrowserRouter,Route} from 'react-router-dom'
import CoineDetail from './pages/Detail'
import Market from './pages/Market'
import Home from './pages/Home'
import About from './pages/About'
import ThemePr from './context/ThemePr';
import Nav from './component/Nav'

function App() {
  return (
    <ThemePr>
      
          <BrowserRouter>
          <Nav/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Market" component={Market}/>
              <Route  path="/Market/:cat" component={Market}/>
              <Route  path="/About" component={About}/>
              <Route path="/Detail/:id" component={CoineDetail}/>
          </BrowserRouter>   
    </ThemePr>
  );
}

export default App;
