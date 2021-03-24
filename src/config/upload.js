const multer = require("multer");
const path = require("path");
const { request } = require("express");

const configmulter = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`

      cb(null, filename);
    }
  })
}

module.exports = configmulter;