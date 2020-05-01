const { Router } = require("express");

module.exports = function ({ TeacherController }) {
  const router = Router();

  router.get("/", TeacherController.index.bind(TeacherController));
  router.get("/:id", TeacherController.show.bind(TeacherController));
  router.post("/", TeacherController.store.bind(TeacherController));
  router.put("/:id", TeacherController.update.bind(TeacherController));
  router.delete("/:id", TeacherController.delete.bind(TeacherController));

  return router;
};