import React, { useEffect, useState } from "react";
import PropTypes, { number } from "prop-types";
import "./StoryList.css";
import { Story } from "./Story";

const StoryList = ({ subreddit }) => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState("");
  const vote = (story, voteUp) => {
    setStories((prevStories) => {
      const updatedStories = [...prevStories];
      const index = updatedStories.findIndex((s) => s.id === story.id);
      const storyToUpdate = updatedStories[index];
      let newUps = storyToUpdate.ups;
      newUps = voteUp ? newUps + 1 : newUps - 1;
      let updatedStory = {
        ...storyToUpdate,
        ups: newUps,
      };
      updatedStories[index] = updatedStory;
      sortStories(updatedStories);
      return updatedStories;
    });
  };
  const upVote = (story) => {
    vote(story, true);
  };
  const downVote = (story) => {
    vote(story, false);
  };

  const sortStories = (stories) => {
    stories.sort((a, b) => b.ups - a.ups);
  };
  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => {
        setError("");
        if (!res.ok) throw new TypeError("something went wrong");
        else return res.json();
      })
      .then((json) => {
        const stories = json.data.children.map((c) => c.data);
        //sort
        sortStories(stories);
        //save the stories into state
        setStories(stories);
      })
      .catch((e) => {
        setError(e.toString());
      });
  }, [setStories, subreddit]);
  if (error)
    return (
      "Oops, something went wrong! Please check the network connection and try again" +
      error
    );
  else
    return (
      <ul className="story-list">
        {stories.map((story) => (
          <li key={story.id}>
            <Story
              story={story}
              onUpVote={() => upVote(story)}
              onDownVote={() => downVote(story)}
            />
          </li>
        ))}
      </ul>
    );
};

StoryList.propTypes = {
  subreddit: PropTypes.string.isRequired,
};

export default StoryList;
