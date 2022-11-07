const fs = require('fs');

function getUsers (req, res) {
    let data = fs.readFileSync('users.json')
    data = JSOn.parse (data);
    res.send (data);
}

function getUserWithFirstName (req, res) {
    let data = fs.readFileSync('users.json');
    data = JSON.parse(data)
    const firstName = req.params.fname;
    const usersWithFirstName = data.filter((user) =>{
       return user.fname.toLocaleLowerCase() == firstName.toLowerCase();
    })
    res.send(usersWithFirstName);
}


function getUserWithLasttName (req, res) {
    let data = fs.readFileSync('users.json');
    data = JSON.parse(data)
    const firstName = req.params.fname;
    const getUserWithLasttName = data.filter((user) =>{
       return user.fname.toLocaleLowerCase() == lastname.toLowerCase();
    })
    res.send(getUserWithLasttName);
}




module.exports = {
    getUsers,
    getUserWithFirstName,
    getUserWithLasttName
}