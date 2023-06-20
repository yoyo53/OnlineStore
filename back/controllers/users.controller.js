const userRepo = require('../repositories/users.repository');
const tokenRepo = require('../repositories/tokens.repository');
const { v4: uuidv4 } = require('uuid');

async function createUserAction(request, response) {
    const user = await userRepo.getUserByEmail(request.body.email);
    if (user == null) {
        const id = await userRepo.createUser(request.body);
        console.log('[',request.ip,'] CREATED User : ', id);
        response.status(200).send(JSON.stringify(await userRepo.getUserById(id)));
    }
    else {
        response.status(400).send("email already taken");
    }
}

async function loginUserAction(request, response) {
    const id = await userRepo.validateUserPassword(request.body.email, request.body.password);
    if (id != null) {
        await tokenRepo.deleteExpiredTokens();
        let token = uuidv4();
        while (await tokenRepo.validateToken(token) != null) {
            token = uuidv4();
        }
        await tokenRepo.addUserToken(id, token, new Date(Date.now() + 1000 * 3600 * 24).toUTCString());
        console.log('[',request.ip,'] LOGGED IN User : ', id);
        response.status(200).json({token: token});
    }
    else {
        response.status(400).json({token: null});
    }
}

async function logoutUserAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        await tokenRepo.deleteToken(token);
        console.log('[',request.ip,'] LOGGED OUT User : ', id);
        response.status(200).send("token deleted successfully");
    }
    else {
        response.status(401).send("invalid token");
    }
}

async function deleteUserAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        await tokenRepo.deleteUserTokens(id);
        await userRepo.deleteUser(id);
        console.log('[',request.ip,'] DELETED User : ', id);
        response.status(200).send("user account deleted successfully");
    }
    else {
        response.status(401).send("invalid token");
    }
}

module.exports = {
    createUserAction,
    loginUserAction,
    logoutUserAction,
    deleteUserAction
};
