const users = require("./queries/users");
const user = require("./queries/user");
const jobs = require("./queries/jobs");
const job = require("./queries/job");
const collaborativeRecommendations = require("./queries/collaborativeRecommendations");

module.exports = {
  users,
  user,
  jobs,
  job,
  collaborativeRecommendations
};