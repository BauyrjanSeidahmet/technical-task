const rootPath = __dirname;
console.log(rootPath);

module.exports = {
  rootPath,
  db: {
    name: "users",
    url: "mongodb://localhost/"
  },
  getDbUrl() {
    return this.db.url + this.db.name
  }
};