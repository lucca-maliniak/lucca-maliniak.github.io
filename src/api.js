async function getPopularMovies() {
    const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=00082de54a25f6dfc89059b86f15ffb4&language=en-US&page=1")
        .then(response => response.json())
        .then(data => data.results)
    const filteredMovies = Array.from(movies).slice(0, 4)
    return filteredMovies
}
getPopularMovies()

async function colocarFilmes() {
    const movies = await getPopularMovies()
    const moviesection = document.querySelector(".movies-grid")
    for (let i = 0; i < movies.length; i++) {
        const movie = document.createElement("div")
        movie.innerHTML += `
        <a href="" target="_blank"><img
                src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"
                alt="" id="m1"></a>
        `
        moviesection.appendChild(movie)
    }
    console.log(movies)
}

colocarFilmes()