const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');
  console.log('successfully connected to database');

}

// host.docker.internal write in the place of the 127.0.0.:2707 when there is docker use