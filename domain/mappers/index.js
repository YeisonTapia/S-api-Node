const { User } = require('../user');

module.exports = {
  toDomainEntity(use){
    const { id, name, lastname } = user
    return new User({id, name, lastname})
  }
}