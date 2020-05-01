const { Router } = require("express");

module.exports = function ({ SubjectController }) {
  const router = Router();

  router.get("/", SubjectController.index.bind(SubjectController));
  router.get("/:id", SubjectController.show.bind(SubjectController));
  router.post("/", SubjectController.store.bind(SubjectController));
  router.put("/:id", SubjectController.update.bind(SubjectController));
  router.delete("/:id", SubjectController.delete.bind(SubjectController));

  return router;
};