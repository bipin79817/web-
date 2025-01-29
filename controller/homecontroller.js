const todolist=require('../models/todo.js');

module.exports.home = async function(req, res) {
    try {
      // Fetch the to-do list items from the database
      const todos = await todolist.find({});
      
      // Pass the list to the EJS view as 'ToDo_List'
      return res.render('home', {
        title: 'ToDo List',
        ToDo_List: todos  // This sends the list to the EJS file
      });
    } catch (err) {
      console.log('Error in fetching to-do list:', err);
      return res.status(500).send('Internal Server Error');
    }
  };


  module.exports.createtodo = async function (req, res) {
    try {
        let dateInput = new Date(req.body.date);
        if (isNaN(dateInput)) {
            console.log('Invalid date provided');
            return res.redirect('back');
        }

        let date = dateInput.getDate();
        const year = dateInput.getFullYear().toString().slice(-2);
        const month = dateInput.toLocaleString("default", {
          month: "short"
        });
        if (date < 10) {
            date = "0" + date;
        }
        
        const newtodo = await todolist.create({
            todo: req.body.todo,
            category: req.body.category,
            date: `${date} ${month} ${year}`
        });

        console.log('New ToDo created:', newtodo);
        return res.redirect('back');
    } catch (err) {
        console.log('Error in creating to-do item:', err);
        return res.status(500).send('Internal Server Error');
    }
};

  module.exports.checkTodo = async (req, res) => {
    try {
      const id = req.query.id;
      const completed = req.query.completed === 'true';
  
      // Update the 'completed' field of the todo item
      await todolist.findByIdAndUpdate(id, { completed: completed });
  
      return res.redirect('back');
    } catch (err) {
      console.log('Error in updating todo:', err);
      return res.status(500).send('Internal Server Error');
    }
  };

  module.exports.deletetodo= async function(req, res) {
    //get the id from query in the url
     try{
         const id=req.query.id;
         await todolist.findByIdAndDelete(id);
         return res.redirect('back');
     } catch(err){
        console.log('error are found');
     }
     
  };
  
