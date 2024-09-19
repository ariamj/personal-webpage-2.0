// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomeIntro from './components/homeIntro';
import ProjectsPage from './components/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomeIntro></HomeIntro>
      <ProjectsPage></ProjectsPage>
    </div>
  );
}

export default App;
