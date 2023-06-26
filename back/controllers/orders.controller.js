const ordersRepository = require('../repositories/orders.repository');
const tokenRepo = require('../repositories/tokens.repository');
const userRepo = require('../repositories/users.repository');


async function getOrdersAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && await userRepo.isAdminUser(id)) {
        const orders = await ordersRepository.getOrders();
        if (orders != null) {
            console.log('[',request.ip,'] FETCHED all orders');
            response.status(200).json(orders);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getOrderAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.getOrderById(request.params.id);
        if (order != null) {
            console.log('[',request.ip,'] FETCHED Order : ', request.params.id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getOrderProductAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.getOrderProduct(request.params.id);
        if (order != null) {
            console.log('[',request.ip,'] FETCHED Order : ', request.params.id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function createOrderAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        const order = await ordersRepository.createOrder(id, request.body.status, request.body.total_price, request.body.product_list);
        if (order != null) {
            console.log('[',request.ip,'] CREATED Order : ', order);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function updateOrderStatusAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.updateOrderStatus(request.params.id, request.body.status);
        if (order != null) {
            console.log('[',request.ip,'] UPDATED Order : ', request.params.id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function addOrderProductAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.addOrderProduct(request.params.id, request.body.product_id, request.body.quantity);
        if (order != null) {
            console.log('[',request.ip,'] UPDATED Order : ', request.params.id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteOrderAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.deleteOrder(request.params.id);
        if (order != null) {
            console.log('[',request.ip,'] DELETED Order : ', request.params.id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteOrderProductAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.deleteOrderProduct(request.params.id, request.body.product_id);
        if (order != null) {
            console.log('[',request.ip,'] DELETED product : ', request.body.product_id);
            response.status(200).json(order);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }   
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getClientOrdersAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        const orders = await ordersRepository.getClientOrders(id);
        if (orders != null) {
            console.log('[',request.ip,'] FETCHED Orders : ', orders);
            response.status(200).json(orders);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getClientCartAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null) {
        let cart = await ordersRepository.getClientCart(id);
        if (cart == 'empty') {
            cart = await ordersRepository.createOrder(id, 'cart', 0, []);
        }
        if (cart != null) {
            console.log('[',request.ip,'] FETCHED cart : ', cart.id);
            response.status(200).json(cart);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function getClientOrdersByIdAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id == request.params.id != null || await userRepo.isAdminUser(id)) {
        const orders = await ordersRepository.getClientOrders(request.params.id);
        if (orders != null) {
            console.log('[',request.ip,'] FETCHED Orders : ', orders);
            response.status(200).json(orders);
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function updateOrderProductQuantityAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (await ordersRepository.getOrderClient(request.params.id) == id != null || await userRepo.isAdminUser(id)) {
        const order = await ordersRepository.updateOrderProductQuantity(request.body.quantity, request.params.id, request.body.product_id);
        if (order != null) {
            console.log('[',request.ip,'] UPDATED product : ', request.body.product_id);
            response.status(200).json(order);
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
    getOrdersAction,
    getOrderAction,
    getOrderProductAction,
    createOrderAction,
    updateOrderStatusAction,
    addOrderProductAction,
    deleteOrderAction,
    deleteOrderProductAction,
    getClientOrdersAction,
    getClientOrdersByIdAction,
    getClientCartAction,
    updateOrderProductQuantityAction
}

