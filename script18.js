/*jshint esversion: 6 */


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();




const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    genres: {},
    privat: false
};
 
function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personalMovieDB);
    } else {
        console.log('ETO ПРИВАТНАЯ БАЗА');
    }
}
showMyDB(personalMovieDB.privat); 


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('DONE!');
        } else {
            console.log('UNdone!');
            i--;
        }    
    }  
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (31 < personalMovieDB.count) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
}

// detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
    
     
}

writeYourGenres();





