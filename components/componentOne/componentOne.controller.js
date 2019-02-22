function componentOneCtrl(model) {
  const methods = {
    doSomething: async (req, res) => {
      try {
      } catch (e) {}
    },
    doSomethingElse: async (req, res) => {}
  };
  return Object.freeze(methods);
}

module.exports = componentOneCtrl();
