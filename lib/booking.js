const axios = require("axios")

const base_url = "http://localhost:8888/tobytech-backend/backend/booking/"

/**
 * Gives you a list of all booked dates on a spesific option
 * @param collection (String) The collection ID
 * @param option (String) The booking option ID
 * @returns Object {"status": boolean, data: Array}
 */
module.exports.getBookedDates = async function getBookedDates(collection="",option="") {
    return await axios({
        method: 'post',
        url: base_url + "getBookedDate.php?option_id="+option+"&collection_id="+collection,
        headers: { 'content-type': 'application/json' }
    }).then(result => {
        return result.data
    }).catch((error) => {
        return error.message
    });
}

/**
 * Creates a new booking
 * @param collection (String) The collection ID
 * @param date (Object) The booking data
 * @returns Object {"status": boolean, data: Array}
 */
 module.exports.createNewBooking = async function createNewBooking(collection="",data={}) {
    return await axios({
        method: 'post',
        url: base_url + "getBookedDate.php?collection_id="+collection,
        headers: { 'content-type': 'application/json' },
        data: data
    }).then(result => {
        return result.data
    }).catch((error) => {
        return error.message
    });
}
