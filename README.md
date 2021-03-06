# NERS-boiler
Node, Express, React, and Redux boilerplate for use with serverless, backend-as-a-service, or when you only need a front end. Also an easy way to test a single component without building a whole project.

# How to use
Clone or download the repo. Run commands in your terminal: `npm install` and then `npm start`.

If you are on a Unix system, this should be all you need to do. If you are on Windows, and the site quits with an error, you may need to edit the "scripts" section in the `package.json` to read:  
  ` "scripts: {
      "client": "webpack -w",
      "server": "nodemon server.js",
      "start": "npm-run-all --parallel server client"
     }`
     
Then run the `npm start` command again.

Navigate to `http://localhost:1337/` or -- if you want to access from a computer other than the one running the program -- `http://That.Computers.IP.Address:1337/`.

You're ready to start subbing your own React components for mine!
