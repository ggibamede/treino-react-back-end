const express = require('express');
const { request, response } = require('express');
const Post = require('../models/posts');
const { remove } = require('../models/users');


const router = express.Router();


//Mostrando todos os Posts cadastrados no mlab
router.get('/posts', async (request,response)=>{
    try {
        const post = await Post.find();
        response.json(post)
        

    } catch (error) {
        response.json({message:error});
    }

});
//Envia um post
router.post('/posts', async (request,response)=>{

    const post = new Post({
        titulo : request.body.titulo,
        descricao : request.body.descricao,
        id_user : request.body.id_user,
    });
    try {
        
   const savedUser = await post.save()
    response.json(savedUser);
    
} catch (error) {
    response.json(error);
        
}
});
module.exports = router;
