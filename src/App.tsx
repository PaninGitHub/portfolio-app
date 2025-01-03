import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import CircAnalytics from "./pages/circanalytics";
import { Layout } from "./Layout";
import MouseFollower from "./assets/components/HoverEffect";

function App(){
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/proj" element={<CircAnalytics/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
