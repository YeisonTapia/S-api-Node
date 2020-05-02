const { TeacherDto } = require("../dtos");
const BaseController = require("./base.controller");

class TeacherController extends BaseController {
  constructor({ TeacherService }) {
    super(TeacherService, TeacherDto);
  }
}

module.exports = TeacherController;