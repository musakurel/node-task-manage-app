const errorHandlerMiddleWare = (err, req, res, next) => {
  return res.status(500).json({ msg: "error oldu" });
};

module.exports=errorHandlerMiddleWare