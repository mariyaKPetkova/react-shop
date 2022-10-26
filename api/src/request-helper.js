const axios = require('axios')
const { GET_ALL_SS, GET_BY_ID, GET_TRAINERS } = require('../config')


async function getAllItems(category) {
    return axios
        .get(`${GET_ALL_SS}/${category}`)
}

async function getItemById(id) {
    return axios
        .get(`${GET_BY_ID}/${id}`)
}

async function getAvailability(id) {
    return axios
        .get(`${GET_BY_ID}/${id}/availability`)
}


async function getTrainers(string) {
    return axios
        .get(`${GET_TRAINERS}${string}`)
}
module.exports = {
    getAllItems,
    getItemById,
    getAvailability,
    getTrainers
}