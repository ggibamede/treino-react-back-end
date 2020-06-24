const express = require('express');
const { request, response } = require('express');
const Users = require('../models/users');
const { remove } = require('../models/users');


const router = express.Router();


//Mostrando todos os Posts cadastrados no mlab
router.get('/users', async (request,response)=>{
    try {
        const user = await Users.find();

        response.json(user)
    } catch (error) {
        response.json({message:error});
    }

});
//Envia um post
router.post('/users', async (request,response)=>{

    const user = new Users({
        nome : request.body.nome,
        login : request.body.login,
        email : request.body.email,
        senha : request.body.senha,
        lembrete : request.body.lembrete,
    });
    try {
        
   const savedUser = await user.save();
    response.json(savedUser);
    
} catch (error) {
    response.json(error);
        
}
});
//Pegando um post especifico
router.get('/users/:userId',async(request,response)=>{
    try {
        
    const user = await Users.findById(request.params.userId);
    response.json(user);

} catch (error) {
    response.json(error);
}
})
//Deletando um post
router.delete('/users/:userId', async (request,response)=>{

    try {
      const removedUser =  await Users.remove({_id : request.params.userId});
       response.json(removedUser)   
       console.log(removedUser.nome);  
    } catch (error) {
        response.json(error);
    }

})
//Atualizando um post 
router.patch('/users/:userId', async (request, response)=>{
    try {
    
    const updatedUser = await Users.updateOne({ _id: request.params.userId}, {$set : {post: request.body.post}});
    response.json(updatedUser); 
    
} catch (error) {
    response.json(error); 
   
}
})



module.exports = router;
