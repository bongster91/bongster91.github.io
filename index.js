
fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
    .then(response => response.json())
    .then(body => {
        let dateInfo = {
            months: {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            },
            year: {},
            day: {},
            month: {}
        }

        let weather = document.getElementById('weather')
        for (let i = 0; i < 1; i += 1) {
            weather.innerHTML = `${body.dataseries[0].weather} | ${body.dataseries[0].temp2m.min}&#x2109 - ${body.dataseries[0].temp2m.max}&#x2109`    
        }
        
        let date = document.getElementById('date')
        let apiDate = body.dataseries[0].date
        let stringDate = JSON.stringify(apiDate)
        
        for (let i = 0; i < stringDate.length; i += 1) {
            if (i === 0) {
                dateInfo.year = stringDate[i]
            } else if (i === 1) {
                dateInfo.year += stringDate[i]
            } else if (i === 2) {
                dateInfo.year += stringDate[i]
            } else if (i === 3) {
                dateInfo.year += stringDate[i]
            } else if (i === 4) {
                dateInfo.month = stringDate[i]
            } else if (i === 5) {
                dateInfo.month += stringDate[i]
            } else if (i === 6) {
                dateInfo.day = stringDate[i]
            } else if (i === 7) {
                dateInfo.day += stringDate[i]
            }
        }

        let month
        let numMonth = Number(dateInfo.month)
        for (let key in dateInfo.months) {
            if (dateInfo.months[numMonth]) {
                month = dateInfo.months[numMonth]
            }
        }
        date.textContent = `${month} ${dateInfo.day}, ${dateInfo.year}`
    })
    .catch(error => console.log(`weather api error`))

function toggleRecipe () {
    const ingredients = document.getElementById('ingredients');
    
    ingredients.style.display === 'none' ? ingredients.style.display = 'block' : ingredients.style.display = 'none';
};

// function getJoke () {
    
//     fetch('https://icanhazdadjoke.com/', {
//         headers: {   
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => {
//         response.json()
//         console.log(response.json())
//     })
//     .then(body => {
//         console.log(body)
//     })
//     .catch(error => {
//         console.error(error)
//     })
// }