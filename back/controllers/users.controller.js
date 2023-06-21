const userRepo = require('../repositories/users.repository');
const tokenRepo = require('../repositories/tokens.repository');
const { v4: uuidv4 } = require('uuid');

async function createUserAction(request, response) {
    const user = await userRepo.getUserByEmail(request.body.email);
    if (user == null) {
        const id = await userRepo.createUser(request.body.email, request.body.password, request.body.firstname, request.body.lastname, request.body.street_nbr, request.body.street, request.body.postcode, request.body.city, request.body.country);
        if (id != null) {
            console.log('[',request.ip,'] CREATED User : ', id);
            response.status(200).json({info: "user created successfully", created_user: await userRepo.getUserById(id)});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({error: "email already taken"});
    }
}

async function loginUserAction(request, response) {
    const id = await userRepo.validateUserPassword(request.body.email, request.body.password);
    if (id != null) {
        await tokenRepo.deleteExpiredTokens();
        if (await tokenRepo.addUserToken(id, uuidv4(), new Date(Date.now() + 1000 * 3600 * 24).toUTCString()) != null) {
            console.log('[',request.ip,'] LOGGED IN User : ', id);
            response.status(200).json({info: "user logged in successfully", token: token, user_id: id});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(400).json({token: null});
    }
}

async function logoutUserAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        if (await tokenRepo.deleteToken(token) != null) {
            console.log('[',request.ip,'] LOGGED OUT User : ', id);
            response.status(200).json({info: "user logged out successfully", user_id: id});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteUserAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        if (await tokenRepo.deleteUserTokens(id) != null && await userRepo.deleteUser(id) != null) {
            console.log('[',request.ip,'] DELETED User : ', id);
            response.status(200).json({info: "user account deleted successfully", deleted_id: id});    
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

module.exports = {
    createUserAction,
    loginUserAction,
    logoutUserAction,
    deleteUserAction
};
