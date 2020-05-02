const { StudentDto } = require("../dtos");
const BaseController = require("./base.controller");

class StudentController extends BaseController {
  constructor({ StudentService }) {
    super(StudentService, StudentDto);
  }
}

module.exports = StudentController;