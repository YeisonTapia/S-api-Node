const { CourseDto } = require("../dtos");
const BaseController = require("./base.controller");

class CourseController extends BaseController {
  constructor({ CourseService }) {
    super(CourseService, CourseDto);
  }

}

module.exports = CourseController;