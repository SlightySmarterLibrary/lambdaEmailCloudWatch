
var moment = require('moment-timezone');

exports.handler = async (event) => {
    
    //dd-mm-yyyy
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var date = new Date();
    var today = moment.tz(date, "Asia/Taipei")
    var date2 = new Date(2020,07,14)
    var diff =  (Math.round(Math.abs((date2 - today) / oneDay)));

    // TODO implement
    const response = {
        statusCode: 200,
        body: diff
    };
    return response;
};
