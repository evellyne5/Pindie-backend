const categoriesRouter = require('express').Router();

const {
	findAllCategories, 
	findCategoryById, 
	createCategory, 
	updateCategory, 
	deleteCategory, 
	checkIsCategoryExists,
	checkEmptyName} = require('../middlewares/categories');

const {
	sendCategoryCreated, 
	sendCategoryById, 
	sendCategoryUpdated, 
	sendCategoryDeleted,
	sendAllCategories} = require('../controllers/categories');

const {checkAuth} = require("../middlewares/auth");

categoriesRouter.get(
	"/categories", 
	findAllCategories, 
	sendAllCategories
);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated,
  checkAuth
);
categoriesRouter.get(
	"/categories/:id", 
	findCategoryById, 
	sendCategoryById
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;
  