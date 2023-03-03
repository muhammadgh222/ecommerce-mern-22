import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "./handleFactory.js";

import SubCategory from "./../models/subCategoryModel.js";

export const setCategoryIdToBody = (req, res, next) => {
  // Nested route (Create)
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

// Nested route
// GET /api/v1/categories/:categoryId/subcategories
export const createFilterObj = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObj = filterObject;
  next();
};

export const createSubCategory = createOne(SubCategory);
export const getSubCategories = getAll(SubCategory);
export const getSubCategory = getOne(SubCategory);
export const updateSubCategory = updateOne(SubCategory);
export const deleteSubCategory = deleteOne(SubCategory);
