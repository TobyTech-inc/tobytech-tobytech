const axios = require("axios")

const base_url = "http://localhost:8888/tobytech-backend/backend/blog/"
const domain = window.location.origin;

/**
 * Gives you a list of all the posts in a collection
 * @param collection (String) The collection ID
 * @returns Object {"status": boolean, data: Array}
 */
module.exports.getPosts = async function getPosts(collection="") {
    return await axios({
        method: 'post',
        url: base_url + "getPosts.php?domain="+domain+"&collection_id="+collection,
        headers: { 'content-type': 'application/json' },
    }).then(result => {
        const res = result.data
        return res
    }).catch((error) => {
        return error.message
    });
}

/**
 * Gives you a spesific post
 * @param itemId (String) The post ID
 * @returns Object {"status": boolean, data: Object}
 */
module.exports.getPost = async function getPost(itemId="") {
    return await axios({
        method: 'post',
        url: base_url + "getPostInfo.php?domain="+domain+"&item_id="+itemId,
        headers: { 'content-type': 'application/json' },
    }).then(result => {
        const res = result.data
        return res
    }).catch((error) => {
        return error.message
    });
}
