import Header from "./Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/project" element={<div>Project Page</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
