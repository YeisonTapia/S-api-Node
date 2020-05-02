const { Router } = require("express");

module.exports = function ({ CourseController }) {
  const router = Router();

  router.get("/", CourseController.index.bind(CourseController));
  router.get("/:id", CourseController.show.bind(CourseController));
  router.post("/", CourseController.store.bind(CourseController));
  router.put("/:id", CourseController.update.bind(CourseController));
  router.delete("/:id", CourseController.delete.bind(CourseController));

  return router;
};