// task 5 
// 4 problems solved in 4 different javascript file.

// 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// sample for testing:
const movies = [
    casinoRoyale,
    new Movie("Iron man", "Marvel", "PG"),
    new Movie("Bat-Man The dark night", "DC", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log("PG Movies:");
pgMovies.forEach(movie => {
    console.log(`${movie.title} (${movie.studio}) - Rating: ${movie.rating}`);
});
