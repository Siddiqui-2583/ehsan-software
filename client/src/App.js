import './App.css';
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import Header from './Components/Header/Header';
import BlogGrid from './Components/BlogGrid/BlogGrid';
import SingleBlog from './Components/SingleBlog/SingleBlog';

function App() {
  const [title, setTitle] = useState("Deafult title");
const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setTitle("")
    axios
      .get("http://localhost:5000/blogs")
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BlogGrid blogs={ blogs} setTitle={setTitle} />
          </Route>

          <Route path="/single-blog">
            <SingleBlog title={title} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
