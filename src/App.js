import {Route, Routes, BrowserRouter} from 'react-router-dom'
import ThemeSlector from './components/ThemeSlector'


//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

//style
import './App.css'


function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <Navbar />

          <ThemeSlector />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
          {/* <Route path='*' element={<Navigate to='/' />} /> */}
          
        </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App
