import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Proj from './pages/project1'
import { Layout } from "./Layout";

function App(){
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/proj" element={<Proj/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
