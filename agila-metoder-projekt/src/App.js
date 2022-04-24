import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AlternativList from './components/AlternativList';
import StartPage from './components/Startpage';
import Scrum from './components/Scrum';
import AllRoles from './components/AllRoles';

function App() {
  return (
    <Router>
      <main className='App'>
        <Routes>
          <Route exakt path='/' element={<StartPage />}></Route>
          <Route exakt path='/AlternativList' element={<AlternativList />}></Route>
          <Route exakt path='/scrum' element={<Scrum />}></Route>
          <Route exakt path='/roles' element={<AllRoles />}></Route>
        </Routes>

      
    </main>
    </Router >
  );
}

export default App;
