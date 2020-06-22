import React from "react";
import "./App.css";
import StoryList from "./StoryList";
import { Header } from "./Header";

function App() {
  return (
    <div className="app">
      <Header className="header" subreddit="reactjs" />
      <StoryList className="story-list" subreddit="reactjs" />
    </div>
  );
}

export default App;
