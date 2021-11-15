const rootPath = __dirname;
console.log(rootPath);

module.exports = {
  rootPath,
  db: {
    name: "users",
    url: "mongodb+srv://admin:admin@cluster0.x67n5.mongodb.net/techtask?retryWrites=true&w=majority"
  },
  getDbUrl() {
    return this.db.url + this.db.name
  }
};