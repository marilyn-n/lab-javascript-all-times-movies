/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function  turnHoursToMinutes(array){
  array.forEach(function(element) {
    var hour = parseInt(element.duration.substring(0,1));
    var minutes = parseInt(element.duration.split("min")[0].substring(2));
    element.duration = hour * 60 + minutes;
  });
  return array;
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function totalReviews(array){
  var rateAvg = 0;
  array.forEach(function(elem){
  var rateNum = parseFloat(elem.rate);
  rateAvg+=rateNum
  });

console.log(rateAvg);
return (rateAvg / array.length).toFixed(2);

}

// Get the average of Drama Movies



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
var moviesbySteven = movies.filter(function(movie){
  if(movie.director === "Steven Spielberg"){
    return movie;
  }
});

console.log(moviesbySteven);



// Order by title and print the first 20 titles


// Best yearly rate average
