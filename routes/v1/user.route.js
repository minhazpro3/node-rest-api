const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

// @api {post} products save to tools
// @api Description
// @api Permission admin

// @api Header
// @api Params
// @api Params
// @api success {object[]} products added
// @api Error
// api Error

router.route("/").post(userController.saveUser);
router.route("/").get(userController.getUser);
router.route("/:id").get(userController.getUserWidthId);
router.route("/:id").put(userController.updateUser);
router.route("/:id").delete(userController.deleteUser);
module.exports = router;
