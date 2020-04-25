class UserController {
  sayHello(req, res){
    return res.send({message: 'Hello World'})
  }
}

module.exports  = UserController