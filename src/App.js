import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/routes/approuter';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import './css/grid.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRouter/> 
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
