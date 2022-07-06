const express = require("express");
const router = express.Router();
const {
  getCategoriesController,
  getCategoryController,
  addCategoryController,
  updateCategoryController,
} = require("../controllers/category.controllers");

//? Swagger component
/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: category's id
 *        name:
 *          type: string
 *          description: category's name
 *        color:
 *          type: string
 *          description: category's color
 *        icon:
 *          type: string
 *          description: category's icon
 *        image:
 *          type: string
 *          description: category's image
 */

//? Swagger tag

/**
 * @swagger
 * tags:
 * - name: Category
 *   description: "All actions for category"
 */

//? Swagger category schema
/**
 * @swagger
 * /category:
 *  get:
 *   description: Get all categories
 *   tags:
 *     - Category
 *   responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  default: 200
 *                  description: the http status code returning by the request
 *                success:
 *                  type: boolean
 *                  default: true
 *                  description: if the request is success
 *                message:
 *                  type: string
 *                  description: the message returning by the request
 *                category:
 *                  type: array
 *                  $ref: '#/components/schemas/Category'
 */
router.get("/category", getCategoriesController);

/**
 * @swagger
 * /category/{categoryId}:
 *  get:
 *   description: Get a category
 *   tags:
 *     - Category
 *   parameters:
 *     - in: path
 *       name: categoryId
 *       type: string
 *       description: Category ID of the category
 *   responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  default: 200
 *                  description: the http status code returning by the request
 *                success:
 *                  type: boolean
 *                  default: true
 *                  description: if the request is success
 *                message:
 *                  type: string
 *                  description: the message returning by the request
 *                category:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 */
router.get("/category/:categoryId", getCategoryController);

/**
 * @swagger
 * /category:
 *  post:
 *   description: Post a category
 *   consumes:
 *     -  application/json
 *   parameters:
 *     - in: body
 *       name: category
 *       description: The category to create
 *       schema:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            description: category's name
 *          color:
 *            type: string
 *            description: category's color
 *          icon:
 *            type: string
 *            description: category's icon
 *          image:
 *            type: string
 *            description: category's image
 *   tags:
 *     - Category
 *   responses:
 *      '201':
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  default: 201
 *                  description: the http status code returning by the request
 *                success:
 *                  type: boolean
 *                  default: true
 *                  description: if the request is success
 *                message:
 *                  type: string
 *                  description: the message returning by the request
 */
router.post("/category", addCategoryController);

/**
 * @swagger
 * /category/{categoryId}:
 *  put:
 *   description: Put a category
 *   tags:
 *     - Category
 *   consumes:
 *     -  application/json
 *   parameters:
 *     - in: path
 *       name: categoryId
 *       type: string
 *       description: Category ID of the category
 *   requestBody:
 *     x-name: body
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *           - name
 *           properties:
 *             name:
 *               type: string
 *               description: category's name
 *             color:
 *               type: string
 *               description: category's color
 *             icon:
 *               type: string
 *               description: category's icon
 *             image:
 *               type: string
 *               description: category's image
 *   responses:
 *      '200':
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  default: 200
 *                  description: the http status code returning by the request
 *                success:
 *                  type: boolean
 *                  default: true
 *                  description: if the request is success
 *                message:
 *                  type: string
 *                  description: the message returning by the request
 */
router.put("/category/:categoryId", updateCategoryController);

module.exports = router;
