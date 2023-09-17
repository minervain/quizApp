import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/quiz/quiz';
import Introduce from './pages/introduce/introduce';
import data from '././api/data.json'




function App() {
  const Modlar=["Zor","Orta","Kolay"]
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Introduce modlar={Modlar} />} />
        <Route path='./:zorluk/deger' element={<Quiz data={data} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
