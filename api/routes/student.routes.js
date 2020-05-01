const { Router } = require("express");

module.exports = function ({ StudentController }) {
  const router = Router();

  router.get("/", StudentController.index.bind(StudentController));
  router.get("/:id", StudentController.show.bind(StudentController));
  router.post("/", StudentController.store.bind(StudentController));
  router.put("/:id", StudentController.update.bind(StudentController));
  router.delete("/:id", StudentController.delete.bind(StudentController));

  return router;
};