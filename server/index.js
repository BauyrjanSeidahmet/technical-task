const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
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
        try {
            await user.save()
            return user
          } catch(err) {
            console.log(err)
          }
    },
    login: async({email, password}) => {
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error('Wrong email or password')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Wrong email or password')
        }

        const token = await jwt.sign({userId: user.id, email: user.email}, 'SomeSecretKey', {expiresIn: '1h'})

        return { userId: user.id, email: user.email, token: token, tokenExpiration: 1 }

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
