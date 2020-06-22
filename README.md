## Reddit React clone

This is a reddit clone, showing a somewhat dated view of what subreddits used to look. Built with React, HTML, CSS and fontawesome. The data is pulled from /r/reactjs on load.<br>

It features:

- Stories are sorted on their upvotes.
- User can up/down vote and stories sort accordingly. (Although this is not posted to reddit nor saved locally.)
- The rest of the actions have no effect, except for the title, which links to the original article on reddit.com.
- Thumbnails are added for reddits with images, otherwise a placeholder font-awesome icon is shown.
- Raw epoch timestamp is converted to "xxx time ago" text using [moment.js](https://momentjs.com/)
- CSS shadows for header and story container.
- CSS was used to remove all button ui of arrows and have them look like clickable text instead (and respond to user interaction)
- UseState hook to keep state is used by StoryList component. All the other components are pure components
