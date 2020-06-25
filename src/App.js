import React from "react";
import "./App.css";
import StoryList from "./StoryList";
import { Header } from "./Header";
import ReadmeViewer from "@bit/miguelhughes.showcase.readme-viewer";

function App() {
  return (
    <div className="app">
      <ReadmeViewer repoName="reddit-clone" />
      <Header className="header" subreddit="reactjs" />
      <StoryList className="story-list" subreddit="reactjs" />
    </div>
  );
}

export default App;
