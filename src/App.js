// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <NavTabs></NavTabs>
      {/* <HomePage></HomePage> */}
      {/* <ProjectsPage></ProjectsPage> */}
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
