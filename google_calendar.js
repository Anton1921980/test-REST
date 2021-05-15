


//npm install
//node google_calendar.js

const { google } = require('googleapis');
const prompt = require('prompt-sync')();



const id = prompt('Input Google Calendar ID (example: anton.molchanovskyi@gmail.com): ');

const start = prompt('Input start date (example: 2021.03.10): ');

const end = prompt('Input end date  (example: 2021.04.20): ');

const calendar = google.calendar({
    version: 'v3',
    auth: 'AIzaSyAkl0q-uMXJ1pc26eiQ0QFfnPHgAITBV-8'
});


const calendarId = `${id}`;

const startDate = new Date(`${start}`);

const endDate = new Date(`${end}`);

calendar.freebusy.query({
    resource: {       
        timeMin: new Date(startDate).toISOString(), 
        timeMax: new Date(endDate).toISOString(),
        timeZone: 'NZ',
        items: [{ id: calendarId }]
    }
}).then((result) => {
    const busy = result.data.calendars[calendarId].busy;
    const errors = result.data.calendars[calendarId].errors;
    if (undefined !== errors) {
        console.error('Check if this calendar has public free busy visibility');
    } else if (busy.length !== 0) {
                console.log('Busy', busy);              
    } else {
        console.log('Free');
        
    }
}).catch((e) => {
    console.error(e);
});
