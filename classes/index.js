class User{
    //constructor é utilizado somente para a definição 
    //de propriedades da própria class
    constructor(email, name){
        this.email = email
        this.name = name
        this.score = 0
    }
    //Métodos são funções que representão ações refrente ao objeto
    login(){
        console.log(this.email, 'just logged in')
        return this
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this
    }
    updateScore(){
            this.score++
            console.log(this.email, 'Score is now', this.score)
            return this//retorna ea instancia do próprio objeto
    }
}


class Admin extends User{

    deletedUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}
var userTwo = new User('ryu@ninjas.com', 'Ryu')
var userOne = new User('yoshi@mariokorp', 'yoshi')
//method chaining enademamento de métodos
//userOne.login().updateScore().updateScore().logout()

var admin = new Admin('bruno@gmail.com', 'bruno')
var users = [userOne, userTwo, admin]
//Filter colocou no array o que é difetente, portanto do array users foi deletado o userTwo
admin.deletedUser(userTwo)
console.log(users)