// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsCarousal from './components/ProjectsCarousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Analytics/>
      {/* <NavBar></NavBar> */}
      <NavTabs></NavTabs>
      {/* <HomePage></HomePage> */}
      {/* <ProjectsPage></ProjectsPage> */}
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
