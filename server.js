// Import app from backend folder, app.js file
const app = require('./backend/app');

app.listen(3000, ()=> {
    console.log('App listening on PORT 3000');
});