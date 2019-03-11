const withCommentsRoutes = require('./CommentsRoutes');

module.exports = function (router) {
    withCommentsRoutes(router);
};