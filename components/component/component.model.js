const mongoose = require('mongoose')

const componentSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Component', componentSchema)
