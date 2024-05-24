const usersRouter = require('express').Router();

const {
	findAllUsers, 
	findUserById, 
	createUser, 
	updateUser, 
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
	checkIsUserExists,
	hashPassword} = require('../middlewares/users');

const {
	sendUserCreated, 
	sendUserById, 
	sendUserUpdated, 
	sendUserDeleted,
	sendAllUsers,
  sendMe} = require('../controllers/users');

const {checkAuth} = require("../middlewares/auth");

usersRouter.get(
	"/users", 
	findAllUsers, 
	sendAllUsers
);

usersRouter.get(
  "/users/:id",
  checkAuth,
  findAllUsers,
  sendUserById,
  sendUserCreated
);
usersRouter.get(
	"/me", 
	checkAuth, 
	sendMe
);

usersRouter.post(
  "/users",
  checkAuth,
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  hashPassword,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  findUserById,
  sendUserUpdated
);
usersRouter.delete(
	"/users/:id", 
	deleteUser, 
	sendUserDeleted
);

module.exports = usersRouter;