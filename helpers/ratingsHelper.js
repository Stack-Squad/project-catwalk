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
  if (summary.length > length) {
    return summary.slice(0, length - 3) + '...';
  }

  return summary;
}

export const getAverageRatings = (ratings) => {
  var numRatings = 0;
  var totalRatings = 0;
  for (var key in ratings) {
    var rating = parseInt(key);
    var numRating = parseInt(ratings[key]);
    totalRatings += (rating * numRating);
    numRatings += numRating;
  }
  var averageRatings = totalRatings / numRatings;
  return Math.round(averageRatings * 10) / 10;
};