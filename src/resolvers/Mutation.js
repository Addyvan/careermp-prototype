const createUser = require("./mutations/createUser");
const deleteUser = require("./mutations/deleteUser");
const createJob = require("./mutations/createJob");
const deleteJob = require("./mutations/deleteJob");
const initializeUser = require("./mutations/initializeUser");
const viewJob = require("./mutations/viewJob");

module.exports = {
    createUser,
    deleteUser,
    createJob,
    deleteJob,
    initializeUser,
    viewJob
};