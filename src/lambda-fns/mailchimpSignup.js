const https = require('https');
// const request = require('request');
const querystring = require('querystring');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = function (event, context, callback) {
    // console.log('EVENT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n',event);
    // console.log('CONTEXT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', context);1\

    // reject GET / Preflight requests
    // if(event.httpMethod !== 'POST' || !event.body) {
    //     callback(null, {
    //         statusCode: 401,
    //         body: "No access"
    //     });
    // }

    const postData = event.body

    const options = {
        hostname: `${process.env.LAMBDA_MAILCHIMP_API}`,
        port: 443,
        path: `${process.env.LAMBDA_MAILCHIMP_LIST_MEMBER_URL}`,
        method: event.httpMethod,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': `apikey ${process.env.LAMBDA_MAILCHIMP_KEY}`
        }
       
    }
    // const req = {...options, ...event.body};
    console.log('OPTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n', options);
    console.log('POST DATA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n', postData);

    const req = https.request(options, (res) => {
        console.log('statusCode>>>>>>>>>>:\n', res.statusCode);
        console.log('statusMessage>>>>>>>>>>>>>:\n', res.statusMessage);
        res.on('data', (d) => {
            process.stdout.write(d);
            callback(null, {
                statusCode: res.statusCode,
                body: res.statusMessage
            });
        });
    });

    req.on('error', (e) => {
        console.error(e);
        callback(e);
    });

    req.write(postData);
    req.end();
}