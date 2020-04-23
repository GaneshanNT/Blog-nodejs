const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const postController = require('./controllers/postcontroller')
const followController = require('./controllers/followController')

//Home
router.get('/', userController.home)
//USER
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.post('/signout', userController.signout)
router.get('/profile/:username', userController.ifUserExists,userController.sharedProfileData, userController.profilePostScreen)
//POST
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreatePost)
router.post('/create-post', userController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)
router.get('/post/:id/edit', userController.mustBeLoggedIn, postController.viewEditScreen)
router.post('/post/:id/edit', userController.mustBeLoggedIn, postController.edit)
router.post('/post/:id/delete', userController.mustBeLoggedIn, postController.delete)
router.post('/search', postController.search)


// Follow

router.post('/addFollow/:username',userController.mustBeLoggedIn,followController.addFollow)



module.exports = router