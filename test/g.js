const { google } = require('googleapis');

const calendar = google.calendar({
    version: 'v3',
    auth: 'AIzaSyAkl0q-uMXJ1pc26eiQ0QFfnPHgAITBV-8'
});

// Set the calendar to query
const calendarId = 'anton.molchanovskyi@gmail.com';


// Set beginning of query to 3 pm tomorrow
const tomorrow3pm = new Date();
tomorrow3pm.setDate(tomorrow3pm.getDate() + 1);
tomorrow3pm.setHours(15, 0, 0);

// Set end of query to 4 pm tomorrow
const tomorrow4pm = new Date();
tomorrow4pm.setDate(tomorrow4pm.getDate() + 1);
tomorrow4pm.setHours(16, 0, 0);

// Make the query
calendar.freebusy.query({
    resource: {
        // Set times to ISO strings as such
        timeMin: new Date(tomorrow3pm).toISOString(), 
        timeMax: new Date(tomorrow4pm).toISOString(),
        timeZone: 'NZ',
        items: [{ id: calendarId }]
    }
}).then((result) => {
    const busy = result.data.calendars[calendarId].busy;
    const errors = result.data.calendars[calendarId].errors;
    if (undefined !== errors) {
        console.error('Check this this calendar has public free busy visibility');
    } else if (busy.length !== 0) {
        console.log('Busy');
    } else {
        console.log('Free');
    }
}).catch((e) => {
    console.error(e);
});