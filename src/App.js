import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/globals.scss';
import Index from './page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  );
}

export default App;
