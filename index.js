let date = {
    months: {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    },
    year: {},
    day: {}
}

fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
    .then(response => response.json())
    .then(body => {
        console.log(body)
        let weather = document.getElementById('weather')
        for (let i = 0; i < body.dataseries.length; i += 1) {
            weather.innerHTML = `${body.dataseries[0].weather} | ${body.dataseries[0].temp2m.min}&#x2109 - ${body.dataseries[0].temp2m.max}&#x2109`    
        }

        let date = document.getElementById('date')
        let apiDate = body.dataseries[0].date
        for (let i = 0; i < apiDate.length; i += 1) {
            date.textContent = apiDate

        }
        
    })
    .catch(error => console.log(error))