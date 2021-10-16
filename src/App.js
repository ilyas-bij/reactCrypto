
import {BrowserRouter,Route} from 'react-router-dom'
import CoineDetail from './pages/Detail/Detail'
import Market from './pages/Market/Market'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ThemePr from './context/ThemePr';
import Nav from './component/Nav/index'
import ArDetail from './pages/Detail/ArtDetail';

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
              <Route path="/ArDetail/:titel" component={ArDetail}/>
          </BrowserRouter>   
    </ThemePr>
  );
}

export default App;
