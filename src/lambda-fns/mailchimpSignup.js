const https = require('https');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = function (event, context, callback) {
    console.log('EVENT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',event);
    // console.log('CONTEXT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', context);1\

    // reject GET / Preflight requests
    if(event.httpMethod !== 'POST' || !event.body) {
        callback(null, {
            statusCode: 401,
            body: "No access"
        });
    }

    const options = {
        hostname: `${process.env.LAMBDA_MAILCHIMP_API}`,
        path: `/lists/${process.env.LAMBDA_MAILCHIMP_LIST_ID}/members`,
        method: event.httpMethod,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.LAMBDA_MAILCHIMP_KEY}`
        },
        body: event.body
    }
    console.log('OPTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', options);

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            console.log(d);
            callback(null, {
                statusCode: 200,
                body: "Success"
            });
        });
    });
    req.on('error', (e) => {
        console.error(e);
        callback(e);
    });
    req.end();
}