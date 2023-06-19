const { bucket } = require('./firebase.connection');

async function uploadFile(request, filepath) {
    await bucket.file(filepath).save(request.file.buffer, { contentType: request.file.mimetype })
}

async function deleteFile(filepath) {
    await bucket.file(filepath).delete()
}

function getFile(filepath, response) {
    bucket.file(filepath).createReadStream().pipe(response);
}

module.exports = {
    uploadFile,
    deleteFile,
    getFile
}