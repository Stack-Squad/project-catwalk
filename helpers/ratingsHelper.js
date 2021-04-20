import {emptyStar, fullStar, quarterStar, halfStar, threeQuarterStar,} from './starRatings.js';


export const getStarRatings = (ratings) => {
  let stars = [];
  for (var i = 0; i < Math.floor(ratings); i++) {
    stars.push(fullStar);
  }
  var halfStars = (ratings * 10) % 10;

  if (stars.length < 5) {
    if (halfStars < 2) {
      stars.push(emptyStar);
    } else if (halfStars < 5) {
      stars.push(quarterStar)
    } else if (halfStars < 7) {
      stars.push(halfStar);
    } else if (halfStars < 9) {
      stars.push(threeQuarterStar);
    } else {
      stars.push(fullStar);
    }
  }

  while (stars.length < 5) {
    stars.push(emptyStar);
  }

  return stars;
}

export const getCharacters = (words, length) => {
  var summary = words.trim();
  if (summary.length > 60) {
    return summary.slice(0, 60) + ' ...';
  }

  return summary;
}