const imageRepo = require('../models/images.model');

async function imageGetAction(request, response) {
    
    await imageRepo.getFile(request.params.filepath, response);
    console.log('[',request.ip,'] FETCHED Image : ', request.params.filepath);
}

async function imageUploadAction(request, response) {

    var image = await imageRepo.uploadFile(request, request.params.filepath);
    console.log('[',request.ip,'] UPLOADED Image : ', request.params.filepath);
    response.status(200).send(JSON.stringify(image));
}

async function imageDelAction(request, response) {

    var image = await imageRepo.deleteFile(request.params.filepath);
    console.log('[',request.ip,'] DELETED Image : ', request.params.filepath);
    response.status(200).send(JSON.stringify(image));
}


module.exports = {
    imageGetAction,
    imageUploadAction,
    imageDelAction
}
