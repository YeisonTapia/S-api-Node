const { SubjectDto } = require("../dtos");
const BaseController = require("./base.controller");

class SubjectController extends BaseController {
  constructor({ SubjectService }) {
    super(SubjectService, SubjectDto);
  }
}

module.exports = SubjectController;