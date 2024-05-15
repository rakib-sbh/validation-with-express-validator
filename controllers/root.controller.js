const rootGetController = (req, res) => {
  res.json({
    message: "Root route is working perfectly",
  });
};

module.exports = { rootGetController };
