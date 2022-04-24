module.exports = {
  ball: () => {
    return require("./8-ball.json").res[
      Math.floor(Math.random() * require("./8-ball.json").res.length)
    ];
  },
};
