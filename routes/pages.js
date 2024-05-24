const pagesRouter = require("express").Router();
const {sendIndex, sendDashboard} = require("../controllers/auth.js");
const {checkCookiesJWT} = require("../middlewares/auth.js");

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, sendDashboard);

module.exports = pagesRouter;
