const mapper = require("automapper-js");

class BaseController {
  constructor(service, dto) {
    this._service = service;
    this._dto = dto;
  }

  async index(req, res) {
    let items = await this._service.getAll();
    items = items.map(item => mapper(this._dto, item));
    return res.send({
      payload: items
    });
  }

  async show(req, res) {
    const { id } = req.params;
    let item = await this._service.get(id);
    if (!item) {
      return res.status(404).send();
    }
    item = mapper(this._dto, item);
    return res.send({
      payload: item
    });
  }

  async store(req, res) {
    const { body } = req;
    const createdItem = await this._service.create(body);
    const item = mapper(this._dto, createdItem);
    return res.status(201).send({
      payload: item
    });
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    await this._service.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).send();
  }

}


module.exports = BaseController;