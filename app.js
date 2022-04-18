const config = require('../config');

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')

const app = express()



// config json

app.use(express.json())

  
  app.use(cors(S))


//Models

const Address = require('./models/Address')
const Voucher = require('./models/Voucher')
const Ids = require('./models/Nft')
const Box = require('./models/Box')


app.get('/', (req,res) => {
    res.status(200).json({msg: 'welcome api'})
})


app.get('/vouchers:id', async(req,res) => {
    const id = req.params._id;

    // check if user exists
    const user = await Voucher.findById(id);
  
    if (!user) {
      return res.status(404).json({ msg: "Id não encontrado!" });
    }
  
    res.status(200).json({ user });
})

app.get('/box:id', checkToken, async(req,res) => {
    const id = req.params._id;

    // check if user exists
    const user = await Box.findById(id);
  
    if (!user) {
      return res.status(404).json({ msg: "Box id não encontrado!" });
    }
  
    res.status(200).json({ user });
})

app.get('/addresses/:id', checkToken, async(req,res) => {

    
    const id = req.params.id;


      // check if user exists
  const user = await Address.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Address não encontrado!" });
  }

  res.status(200).json({ user });

})

app.get('/ids/:id', async(req,res) => {

    const id = req.params.id
  


      // check if user exists
  const user = await Ids.findOne({id:id});

  if (!user) {
    return res.status(404).json({ msg: "Id não encontrado!" });
  }

  res.status(200).json( {user} );

})

app.post('/ids', checkToken, async(req,res) => {
    const {id, name, item, rarity, image, powerOne, powerTwo, powerThree,text} = req.body

    if(!id) {
        return res.status(422).json({msg: "falta id"})
    }

    if(!name) {
        return res.status(422).json({msg: "falta name"})
    }
    if(!item) {
        return res.status(422).json({msg: "falta item"})
    }
    if(!rarity) {
        return res.status(422).json({msg: "falta rarity"})
    }
    if(!image) {
        return res.status(422).json({msg: "falta rarity"})
    }
    if(!powerOne) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!powerTwo) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!powerThree) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!text) {
        return res.status(422).json({msg: "falta text"})
    }

    const nfts = new Ids({
        id, 
        name, 
        item, 
        rarity, 
        image, 
        powerOne,
        powerTwo,
        powerThree,
        text,
    })



    try {

        await nfts.save()

        res.status(201)
        .json({msg: "nft criado com sucesso"})

    } catch(error) {

        console.log(error)

        res
        .status(500)
        .json({msg: error})
    }
    
})

app.post('/box', checkToken, async(req, res) => {
    const {_id, user, price, name, } = req.body
    if(!_id) {
        return res.status(422).json({msg: "falta id"})
    }
    if(!user) {
        return res.status(422).json({msg: "falta user"})
    }
    if(!price) {
        return res.status(422).json({msg: "falta price"})
    }
    if(!name) {
        return res.status(422).json({msg: "falta priceRHT"})
    }


    const box = new Box({
        _id, 
        user, 
        name,
        price, 
    })

    try {

        await box.save()

        res.status(201)
        .json({msg: "box criado com sucesso"})

    } catch(error) {

        console.log(error)

        res
        .status(500)
        .json({msg: error})
    }

})

app.post('/vouchers', checkToken, async(req, res) => {
    const {_id, user, price, priceRHT, max, name, item, rarity, image, powerOne, powerTwo, powerThree,text} = req.body
    if(!_id) {
        return res.status(422).json({msg: "falta id"})
    }
    if(!user) {
        return res.status(422).json({msg: "falta user"})
    }
    if(!price) {
        return res.status(422).json({msg: "falta price"})
    }
    if(!priceRHT) {
        return res.status(422).json({msg: "falta priceRHT"})
    }
    if(!max) {
        return res.status(422).json({msg: "falta max"})
    }
    if(!name) {
        return res.status(422).json({msg: "falta name"})
    }
    if(!item) {
        return res.status(422).json({msg: "falta item"})
    }
    if(!rarity) {
        return res.status(422).json({msg: "falta rarity"})
    }
    if(!image) {
        return res.status(422).json({msg: "falta rarity"})
    }
    if(!powerOne) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!powerTwo) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!powerThree) {
        return res.status(422).json({msg: "falta PowerOne"})
    }
    if(!text) {
        return res.status(422).json({msg: "falta text"})
    }

    const vouchers = new Voucher({
        _id, 
        user, 
        price, 
        priceRHT, 
        max,
        name, 
        item, 
        rarity, 
        image, 
        powerOne,
        powerTwo,
        powerThree,
        text,
    })

    try {

        await vouchers.save()

        res.status(201)
        .json({msg: "vouchers criado com sucesso"})

    } catch(error) {

        console.log(error)

        res
        .status(500)
        .json({msg: error})
    }

})

app.put('/ids/:id', checkToken, (req, res) =>{
    // Primary Key of Todo Document we wish to update
    const todoID = req.params.id;
    // Document used to update
    const userInput = req.body.max;
    // Find Document By ID and Update
  
    Ids.findByIdAndUpdate({_id:todoID}, {$set:{max:userInput}},
        {new:false}, (err,data) => {
            if(data == null) {
                res.send("error nao encontrado")
            } else {
                res.send(data)
            }
        })
});

app.put('/box/:id', checkToken, (req, res) =>{
    // Primary Key of Todo Document we wish to update
    const todoID = req.params.id;
    // Document used to update
    const userInput = req.body.max;
    // Find Document By ID and Update
  
    Box.findByIdAndUpdate({_id:todoID}, {$set:{max:userInput}},
        {new:false}, (err,data) => {
            if(data == null) {
                res.send("error nao encontrado")
            } else {
                res.send(data)
            }
        })
});

app.put('/vouchers/:id', checkToken, (req, res) =>{
    // Primary Key of Todo Document we wish to update
    const todoID = req.params.id;
    // Document used to update
    const userInput = req.body.max;
    // Find Document By ID and Update
  
    Voucher.findByIdAndUpdate({_id:todoID}, {$set:{max:userInput}},
        {new:false}, (err,data) => {
            if(data == null) {
                res.send("error nao encontrado")
            } else {
                res.send(data)
            }
        })
  
});








app.post('/auth/address', async(req,res) => {
    const {address} = req.body

    // Validations

    if(!address) {
        return res.status(422).json({msg: "falta address"})
    }
  

    const userExists = await Address.findOne({ address: address });

    if (userExists) {
      return res.status(422).json({ msg: "Por favor, utilize outro address!" });
    }


    // Create User

    const user = new Address({
        address,
    })

    try {

        await user.save()

        res.status(201)
        .json({msg: "address salvo com sucesso"})

    } catch(error) {

        console.log(error)

        res
        .status(500)
        .json({msg: error})
    }


})


// Login

app.post("/auth/login",async(req,res) => {

    const {address} = req.body

      // Validations

    if(!address) {
        return res.status(422).json({msg: "falta address"})
    }
 

        // CHeck User

        const user = await Address.findOne({ address: address })

        if(!user) {
            return res.status(404).json({msg: "address nao encontrado!"})
        }


   
        try {
            
            const secret = process.env.SECRET

            const token = jwt.sign({id: user._id},  secret, {
                expiresIn: "35s",
            })
          

            res.status(200).json({token})
            console.log(token)

        } catch (err) {
                    console.log(err)

        res
        .status(500)
        .json({msg: "Aconteceu um erro"})
        }
})

app.get('/vouchers/:id', async(req,res) => {

    
    const id = req.params.id;


      // check if user exists
  const user = await Voucher.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });

})

app.get('/box/:id', async(req,res) => {

    
    const id = req.params.id;


      // check if user exists
  const user = await Box.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Box não encontrado!" });
  }

  res.status(200).json({ user });

})

app.get('/addresses/:id', async(req,res) => {

    
    const id = req.params.id;


      // check if user exists
  const user = await Address.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Address não encontrado!" });
  }

  res.status(200).json({ user });

})

app.get('/ids/:id', async(req,res) => {

    
    const id = req.params.id;


      // check if user exists
  const user = await Ids.findById(id);

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });

})


function checkToken(req, res, next) {
    
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
  
    if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
    try {
        const secret = process.env.SECRET;
  
      jwt.verify(token, secret);

  
      next();
    } catch (err) {
      res.status(400).json({ msg: "O Token é inválido!" });
    }
  }


const dbUser = config.MONGODB_USER
const dbPassword = config.MONGODB_PASS

mongoose
.connect(
  

    `mongodb://${dbUser}:${dbPassword}@162.240.67.29:27017/RHT`,{ useNewUrlParser: true })
   
    
.then(() => {
    app.listen(3006)
    console.log("conectado ao DB")
})
.catch((err) => console.log(err))



 


