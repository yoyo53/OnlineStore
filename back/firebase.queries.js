const { bucket } = require('./firebase.connection');

function uploadFile(request, response) {
    bucket.file(request.file.originalname).save(request.file.buffer, { contentType: request.file.mimetype }, (error) => {
        if (error) { throw error; }
        response.status(200).send(`${request.file.originalname} uploaded to bucket.`);
    })
}

function getFile(request, response) {
    bucket.file(request.params.filepath).createReadStream().pipe(response);
}

module.exports = {
    uploadFile,
    getFile
}