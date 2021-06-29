/*jshint esversion: 6 */
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a.length < 50 && a != null && b != null && a != '' && b != '' ) {
        
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log('ERROR');
//     }
// }

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a.length < 50 && a != null && b != null && a != '' && b != '' ) {
        
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log('ERROR');
//     }
//     i++;
//     console.log(i);
// }

let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a.length < 50 && a != null && b != null && a != '' && b != '' ) {
        
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('ERROR');
    }
    i++;
}
while (i < 2)


if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);