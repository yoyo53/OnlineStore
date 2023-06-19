const userRepo = require('../models/users.model');

async function userRootAction(request, response) {

    response.redirect("/list");
    console.log('[',request.ip,'] REDIRECTED to /list');
}

async function userListAction(request, response) {

    var users = await userRepo.getUsers();
    console.log('[',request.ip,'] FETCHED All Users');

    response.status(200).send(JSON.stringify(users));

}

async function userShowAction(request, response) {

    var oneUser = await userRepo.getUserById(request.params.id);
    response.status(200).send(JSON.stringify(oneUser));

    console.log('[',request.ip,'] FETCHED User : ', request.params.id);
}

async function userDelAction(request, response) {

    var numRows = await userRepo.deleteUser(request.params.id);
    console.log('[',request.ip,'] DELETED User : ', request.params.id);
    response.status(200).send(JSON.stringify("Deleted"));
}

async function userEditAction(request, response) {

    var numRows = await userRepo.updateUser(request.params.id, request.body);
    console.log('[',request.ip,'] UPDATED User : ', request.params.id);
    response.status(200).send(JSON.stringify("Updated"));
}


async function userCreateAction(request, response) {

    var userID = await userRepo.createUser(request.body);
    console.log('[',request.ip,'] CREATED User : ', userID);
    response.status(200).send(JSON.stringify("Created"));
}

module.exports = {
    userRootAction,
    userListAction,
    userShowAction,
    userDelAction,
    userEditAction,
    userCreateAction
};
