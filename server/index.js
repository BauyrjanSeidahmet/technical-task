const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const mongoose = require("mongoose");
const schema = require('./schema')
const config = require("./config");

const User = require('./models/User');

const app = express()
const port = 5000;

const root = {
    getAllUsers: async() => {
        const users = await User.find()
        return users 
    },
    getUser: async({id}) => {
        const user = await User.findById(id)
        if (user) {
            return user
        } else {
            return ({ message: 'User is not found', statusCode: 404 })
        }
    },
    createUser: async({input}) => {  
        const user = new User({
            ...input
        })
        user.generateToken();
        try {
            await user.save()
            return user
          } catch(err) {
            console.log(err)
          }
    }
}

const run = async () => {
    await mongoose.connect(config.getDbUrl(), {useNewUrlParser: true, useUnifiedTopology: true});
  
    app.use(cors())
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema,
        rootValue: root
    }))
      
  
  
    app.listen(port, () => {
      console.log("Server started at http://localhost:" + port);
    });
  };
  
  run().catch(e => console.log(e));
