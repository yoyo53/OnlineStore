const { bucket } = require('./firebase.connection');

async function uploadFile(request, response) {
    await bucket.file(request.file.originalname).save(request.file.buffer, { contentType: request.file.mimetype }, (error) => {
        if (error) { throw error }
        response.status(200).send(`${request.file.originalname} uploaded to bucket.`);
    })
}

async function getFile(request, response) {
    const file = bucket.file(request.params.filepath);
    const readStream = file.createReadStream();
    readStream.pipe(response);
}

module.exports = {
    uploadFile,
    getFile
}