const ranidb = require("ranidb");

const Users = new ranidb("./db/users.json", {idType: 'empty'});

function addUser(id, chat_id) {
    let user = {
        id: id,
        chat_id: chat_id
    }
    if (!id == "" && !chat_id == "") {
        Users.push(user)
        return true
    }

    return false
}

function IsUser(id, chat_id) {
    let user = {
        id: id,
        chat_id: chat_id
    }
    if (Users.filter(user).length > 0) {
        return true
    }

    return false
}

function removeUser(id, chat_id) {
    let user = {
        id: id,
        chat_id: chat_id
    }
    if (Users.filter(user).length > 0) {
        return Users.delete(user)
    }

    return false
}
module.exports = { addUser, IsUser, removeUser }