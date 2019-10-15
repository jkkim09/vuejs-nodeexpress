const configUtil = () => {
  this.config = {}
  const setFunction = (key, value) => {
    this.config[key] = value
  }

  const getFunciton = (key) => {
    return this.config[key]
  }
  return {
    setConfig: setFunction,
    getConfig: getFunciton
  }
}
module.exports = configUtil()
