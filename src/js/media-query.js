// this is exported and used as a media query for Javascript. it matches the value of the media query set on CSS.
const mediaQueries = {
  tabletL: window.matchMedia("(min-width: 1024px)"),
};

// returns true if media query is valid; else false
const mediaQ = (viewport) => mediaQueries[viewport].matches;

export default mediaQ;
