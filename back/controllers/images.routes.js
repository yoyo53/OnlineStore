const express = require('express');
const router = express.Router();
const imageRepo = require('../utils/images.repository');


router.get("/:filepath", imageGetAction);
router.post("/:filepath", imageUploadAction);
router.delete("/:filepath", imageDelAction);

async function imageGetAction(request, response) {
    
    var image = await imageRepo.getFile(request.params.filepath);
    console.log('[',request.ip,'] FETCHED Image : ', request.params.filepath);
    response.status(200).send(JSON.stringify(image));
}

async function imageUploadAction(request, response) {

    var image = await imageRepo.uploadFile(request.params.filepath);
    console.log('[',request.ip,'] UPLOADED Image : ', request.params.filepath);
    response.status(200).send(JSON.stringify(image));
}

async function imageDelAction(request, response) {

    var image = await imageRepo.deleteFile(request.params.filepath);
    console.log('[',request.ip,'] DELETED Image : ', request.params.filepath);
    response.status(200).send(JSON.stringify(image));

}

module.exports = router;



