'use strict';

const pa11y = require('pa11y');

runPa11y();

async function runPa11y() {

    try{

        var urlToTest = 'https://dms.dev-ridlt.net';

        const result = await pa11y (urlToTest, {
            standard: 'WCAG2AA',
            actions: [
            'navigate to https://dms.dev-ridlt.net',
            'wait for url to be https://ridltauth.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=7qtmhvnnpsk661tretuhihl6nf&redirect_uri=https://dms.dev-ridlt.net/token',
            'set field .visible-lg form input[name="username"] to test',
            'set field .visible-lg form input[name="password"] to KMT3$t3r',
            'click element  .visible-lg form input[name="signInSubmitButton"]',
            'wait for element #body to be visible'
            ],

            log: {
                debug: console.log,
                error: console.error,
                info: console.log
            },

            timeout: 90000
        });

        console.log(result);

    }   catch (error) {
        console.error(error.message);
    }
}