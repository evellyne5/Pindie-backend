const gamesRouter = require('express').Router();

const {
	findAllGames, 
	findGameById, 
	createGame, 
	updateGame, 
	deleteGame,  
	checkIfUsersAreSafe, 
	checkIfCategoriesAvaliable, 
	checkEmptyFields,
	checkIsGameExists,
	checkIsVoteRequest} = require('../middlewares/games');

const {
	sendGameCreated, 
	sendGameById, 
	sendGameUpdated, 
	sendGameDeleted,
	sendAllGames} = require('../controllers/games');

const {checkAuth} = require("../middlewares/auth");

gamesRouter.get(
	"/games", 
	findAllGames, 
	sendAllGames
);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkIsVoteRequest,
  createGame,
  sendGameCreated,
  checkAuth
);
gamesRouter.get(
  "/games/:id",
  findGameById,
  sendGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkAuth
);
gamesRouter.delete(
	"/games/:id", 
	deleteGame, 
	checkAuth, 
	sendGameDeleted
);

module.exports = gamesRouter;
