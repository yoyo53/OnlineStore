const imageRepo = require('../repositories/images.repository');
const productRepo = require('../repositories/products.repository');
const userRepo = require('../repositories/users.repository');
const tokenRepo = require('../repositories/tokens.repository');

async function getAllProductsAction(request, response) {
    const products = await productRepo.getAllProducts();
    if (products != null) {
        console.log('[',request.ip,'] FETCHED all products');
        response.status(200).json(products);
    }
    else {
        response.status(400).json({error: "invalid request"});
    }
}

async function getImageProductAction(request, response) {
    const product = await productRepo.getProductById(request.params.id);
    if (product != null) {
        await imageRepo.getFile(product.image, response);
        console.log('[',request.ip,'] FETCHED Image of product : ', request.params.id);
    }
    else {
        response.status(400).json({error: "invalid request"});
    }
}

async function createProductAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && await userRepo.isAdminUser(id)) {
        const id = await productRepo.createProduct(request.body.name, request.body.description, request.body.stock, request.body.price, request.body.image);
        if (id != null && await imageRepo.uploadFile(request, request.body.image)) {
            console.log('[',request.ip,'] CREATED Product : ', id);
            response.status(200).json({info: "product created successfully", created_product: await productRepo.getProductById(id)});    
        }
        else {
            response.status(400).json({error: "invalid request"});
        }
    }
    else {
        response.status(401).json({error: "invalid token"});
    }
}

async function deleteProductAction(request, response) {
    const token = request.get("Authorization");
    const id = await tokenRepo.validateToken(token);
    if (id != null && await userRepo.isAdminUser(id)) {
        const product = await productRepo.getProductById(request.params.id);
        if (product != null && await imageRepo.deleteFile(product.image) && await productRepo.deleteProduct(request.params.id) != null) {
            console.log('[',request.ip,'] DELETED Product : ', request.params.id);
            response.status(200).json({info: "product deleted successfully", deleted_id: id});    
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
    getAllProductsAction,
    getImageProductAction,
    createProductAction,
    deleteProductAction
}
