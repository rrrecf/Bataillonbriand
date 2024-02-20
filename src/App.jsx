import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Accueil from './Accueil'
import Contact from './Contact'



function App() {

  return(
<>
  <Routes>
      <Route >
        <Accueil></Accueil>
      </Route>
      <Route>
        <Contact></Contact>
      </Route>
    </Routes>

    </>
  )
   
}

export default App
