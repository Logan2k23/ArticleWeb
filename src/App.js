
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostText from './pages/article/PostText';
import UpdateArticle from "./pages/article/UpdateArticle";
import View from "./pages/view/View"
import Footer from "./pages/Footer/Footer"
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
    
      <Header/>
      <Routes>
      <Route path='/x' element={<Login/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='/article' element={<PostText/>}/>
      <Route path='/article/:id' element={<UpdateArticle/>}/>
      <Route path='/view/:id' element={<View/>}/>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
