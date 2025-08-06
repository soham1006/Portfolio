const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany(); 
  await Project.insertMany([
    {
    title: "Private ChatRoom Application",
    description: "Developed a real-time, end-to-end encrypted chat app with private room support.Enabled live messaging, typing status, and timestamps using Socket.io.Stored chats securely in MongoDB with user authentication and AES encryption.",
    link: "https://github.com/soham1006/Sanwariya"
  },
    {
      title: "Private Chat-Room",
      description: "A real-time encrypted chat app using Socket.io and MongoDB.",
      link: "https://github.com/soham1006/private-chat-room"
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
