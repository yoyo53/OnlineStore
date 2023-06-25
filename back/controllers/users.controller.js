const userRepo = require('../repositories/users.repository');
const tokenRepo = require('../repositories/tokens.repository');
const { v4: uuidv4 } = require('uuid');
const { hashSync, compareSync } = require('bcrypt');

async function createUserAction(request, response) {
    if (!await userRepo.checkExistsUser(request.body.email)) {
        const hashed_password = hashSync(request.body.password, 10);
        const id = await userRepo.createUser(request.body.email, hashed_password, request.body.firstname, request.body.lastname, request.body.address);
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

async function verifyToken(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    const admin = id == null ? false : await userRepo.isAdminUser(id)
    response.status(200).json({valid: id != null, admin: admin});
}

async function loginUserAction(request, response) {
    const user = await userRepo.getUserByEmail(request.body.email);
    if (user != null && compareSync(request.body.password, user.password)) {
        await tokenRepo.deleteExpiredTokens();
        const token = await tokenRepo.addUserToken(user.id, uuidv4(), new Date(Date.now() + 1000 * 3600 * 24).toUTCString());
        if (token != null) {
            console.log('[',request.ip,'] LOGGED IN User : ', user.id);
            response.status(200).json({info: "user logged in successfully", token: token, user_id: user.id, admin: user.admin});
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
            response.status(200).json({inf: "user logged out successfully", user_id: id});
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteUserByTokenAction(request, response) {
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

async function deleteUserByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id == request.params.id || userRepo.isAdminUser(id)) {
        if (await tokenRepo.deleteUserTokens(request.params.id) != null && await userRepo.deleteUser(request.params.id) != null) {
            console.log('[',request.ip,'] DELETED User : ', request.params.id);
            response.status(200).json({info: "user account deleted successfully", deleted_id: request.params.id});    
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getAllUsersAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && await userRepo.isAdminUser(id)) {
        const users = await userRepo.getAllUsers();
        if (users != null) {
            console.log('[',request.ip,'] FETCHED all users');
            response.status(200).json(users);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getUserProfileAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        const user = await userRepo.getUserById(id);
        if (user != null) {
            console.log('[',request.ip,'] FETCHED user: ', id);
            response.status(200).json(user);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getUserProfileByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id == request.params.id || userRepo.isAdminUser(id) ) {
        const user = await userRepo.getUserById(request.params.id);
        if (user != null) {
            console.log('[',request.ip,'] FETCHED user: ', request.params.id);
            response.status(200).json(user);
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
    verifyToken,
    loginUserAction,
    logoutUserAction,
    deleteUserByTokenAction,
    deleteUserByIdAction,
    getAllUsersAction,
    getUserProfileAction,
    getUserProfileByIdAction
};
