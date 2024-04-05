
import './App.css';
import Header from './components/header/header';
import { Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import CourseHome from './components/allcourses/coursehome';
import Team from './components/teams/team';
import Price from './components/pricing/price';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
      <Route path='/'  Component={Home}></Route>
      <Route path='/about'  Component={About}></Route>
      <Route path='/courses'  Component={CourseHome}></Route>
      <Route path='/team'  Component={Team}></Route>
      <Route path='/pricing'  Component={Price}></Route>
    
      </Routes>
      </Router>
    </>
  );
}

export default App;
