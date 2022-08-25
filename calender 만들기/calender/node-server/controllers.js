const path = require('path');

exports.getRender = (req, res) => {
    res.sendFile(path.join(__dirname, '../react-project/build/index.html'));
}