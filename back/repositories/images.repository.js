const { bucket } = require('../utils/firebase.connection');

async function uploadFile(request, filepath) {
    try {
        await bucket.file(filepath).save(request.file.buffer, { contentType: request.file.mimetype })
        return true
    }
    catch {return false}
}

async function deleteFile(filepath) {
    try {
        await bucket.file(filepath).delete()
        return true    
    }
    catch {return false}
}

async function getFile(filepath, response) {
    try {
        await bucket.file(filepath).createReadStream().pipe(response);
    }
    catch {
        response.status(400).json({error: "invalid request"})
    }
}

module.exports = {
    uploadFile,
    deleteFile,
    getFile
}