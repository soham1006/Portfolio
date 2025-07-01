const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany(); 
  await Project.insertMany([
    {
      title: "Private Chat-Room",
      description: "A real-time encrypted chat app using Socket.io and MongoDB.",
      link: "https://github.com/soham1006/private-chat-room"
    },
     {
    title: "Expense-Tracker",
    description: "A simple web-based tool to track your expenses visually using HTML, CSS, and JavaScript.",
    link: "https://github.com/soham1006/Expense-Tracker"
  },
  {
    title: "wordWizard",
    description: "A JavaScript-based word game app that lets users challenge vocabulary and spelling.",
    link: "https://github.com/soham1006/wordWizard"
  }
  ]);
  console.log("✅ Sample projects inserted");
  mongoose.disconnect();
});
