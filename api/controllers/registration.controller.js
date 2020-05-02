const { RegistrationDto } = require("../dtos");
const BaseController = require("./base.controller");

class RegistrationController extends BaseController {
  constructor({ RegistrationService }) {
    super(RegistrationService, RegistrationDto);
  }
}

module.exports = RegistrationController;