import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Analytics/>
      <NavTabs></NavTabs>
    </div>
  );
}

export default App;
