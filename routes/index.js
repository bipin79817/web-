const express=require('express');
const router=express.Router();
const homeController=require('../controller/homecontroller.js');

console.log('router loaded');

router.get('/', homeController.home);
router.post('/create-todo', homeController.createtodo); // controller for creating todo list
router.get('/check-todo', homeController.checkTodo); //controller for check the item
router.get('/delete-todo', homeController.deletetodo); // controller for deleting todo list

module.exports=router;