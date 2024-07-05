import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NewBlog from "./pages/NewBlog";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import BlogDetails from "./BlogDetails";
function App() {
  //const title='welcome to the new blog';
  // const likes=50;
  // const link="https://www.youtube.com/";
  // const person={name: 'hero',age:'30'}
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewBlog />} />
            <Route path ="/about" element={<AboutUs/>}>
            <Route path="/about/faq" element={<Faq/>}/>
            <Route path="/about/help" element={<Help/>}/>
            </Route>
            <Route path="/blogs/:id" element={<BlogDetails/>}/>
          </Routes>
        </div>
        {/* <h1>{title}</h1>

      <p>{likes}times</p>
      {/* <p>{person}</p> */}
        {/* <a href={link}>youtube site</a> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
