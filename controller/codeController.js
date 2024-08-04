const codeFileSchema = require("../model/codeFileSchema");
const responseHelper = require("../utils/helper");

module.exports = {
  insertCode: async (req, res, next) => {
    try {
      const { userCode, zipFilePath, userName, descripation, publishType } =
        req.body;
      if (publishType === "1") {
        return responseHelper.errorResposne(
          res,
          400,
          "You do not have an account to  private code. Please create an account.",
          (body = {})
        );
      }
      const createdData = await codeFileSchema.create({
        userCode: userCode || "",
        zipFilePath: zipFilePath || "",
        userName: userName || "",
        descripation: descripation || "",
        publishType: publishType || "",
      });
      return responseHelper.success(
        res,
        200,
        "Uploaded successfully",
        (body = { createdData })
      );
    } catch (error) {
      return responseHelper.errorResposne(res, 500, error.message, (body = {}));
    }
  },
  insertFile: async (req, res, next) => {
    try {
      const { userCode, userName, descripation, publishType } =
        req.body;
        const file = req.file.filename
      if (publishType === "1") {
        return responseHelper.errorResposne(
          res,
          400,
          "You do not have an account to  private code. Please create an account.",
          (body = {})
        );
      }
      if(!file) return responseHelper.errorResposne(
        res,
        400,
        "Please select a file",
        (body = {})
      );
      const createdData = await codeFileSchema.create({
        userCode: userCode || "",
        zipFilePath: file || "",
        userName: userName || "",
        descripation: descripation || "",
        publishType: publishType || "",
      });
      return responseHelper.success(
        res,
        200,
        "Uploaded successfully",
        (body = { createdData })
      );
    } catch (error) {
      return next(error)
    }
  },
  get_public_code:async(req, res, next)=>{
    try {
        const get_public_code=await codeFileSchema.find({publishType:"0"})
        return responseHelper.success(
            res,
            200,
            "get successfully",
            (get_public_code)
          );
    } catch (error) {
        next(error)
    }
  }
};
