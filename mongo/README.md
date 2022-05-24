npm  init -y
npm i mongoose
npm i --save-dev nodemon

go to package.json and change items in  "scripts" to
"devStart": "nodemon script.js"

to initialise
npm run devStart