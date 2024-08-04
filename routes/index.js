const express =require('express')
const route=express.Router()
const codeController=require('../controller/codeController')
const { handleFileUpload } = require('../utils/fileUploader')
route.post('/fileUplopad',handleFileUpload("file"),codeController.insertFile)
route.post('/insert_code',codeController.insertCode)
route.get('/get_public_code',codeController.get_public_code)

module.exports =route