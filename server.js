const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/cats/:name').get((request, response) => {
    const requestedCatName = request.params['name'];
    response.send({ name: requestedCatName });
});