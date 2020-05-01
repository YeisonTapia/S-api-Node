const { Router } = require("express");

module.exports = function ({ RegistrationController }) {
  const router = Router();

  router.get("/", RegistrationController.index.bind(RegistrationController));
  router.get("/:id", RegistrationController.show.bind(RegistrationController));
  router.post("/", RegistrationController.store.bind(RegistrationController));
  router.put("/:id", RegistrationController.update.bind(RegistrationController));
  router.delete("/:id", RegistrationController.delete.bind(RegistrationController));

  return router;
};