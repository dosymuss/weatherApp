import { Route, Routes } from "react-router-dom"
import OnboardingPage from './pages/OnboardingPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import TestPage from "./pages/TestPage";
import NextWeatherPage from "./pages/NextWeatherPage";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<OnboardingPage/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/test" element={<TestPage/>}/>
        <Route path="/next" element={<NextWeatherPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
