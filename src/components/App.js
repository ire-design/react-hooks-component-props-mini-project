import React from "react";
import blogData from "../data/blog.js";
import Header from "./App/Header.jsx";
import About from "./App/About.jsx";
import ArticleList from "./App/ArticleList.jsx";

function App() {
  return (
    <div className="App">
       
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
