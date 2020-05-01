const { Router } = require("express");

module.exports = function ({ SectionController }) {
  const router = Router();

  router.get("/", SectionController.index.bind(SectionController));
  router.get("/:id", SectionController.show.bind(SectionController));
  router.post("/", SectionController.store.bind(SectionController));
  router.put("/:id", SectionController.update.bind(SectionController));
  router.delete("/:id", SectionController.delete.bind(SectionController));

  return router;
};