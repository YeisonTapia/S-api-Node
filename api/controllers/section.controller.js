const { SectionDto } = require("../dtos");
const BaseController = require("./base.controller");

class SectionController extends BaseController {
  constructor({ SectionService }) {
    super(SectionService, SectionDto);
  }
}

module.exports = SectionController;