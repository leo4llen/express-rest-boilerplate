function componentOneCtrl(model) {
  const methods = {
    doSomething: async (req, res) => {
      try {
        res.status(200).send('something')
      } catch (e) {}
    },
    doSomethingElse: async (req, res) => {
      res.status(200).send('something else')
    }
  }
  return Object.freeze(methods)
}

module.exports = componentOneCtrl()
