const fs = require('fs');

function getUsers (req, res) {
    let data = fs.readFileSync('users.json')
    data = JSON.parse (data);
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

function addUser(req, res) {
    let rawdata = fs.readFileSync('users.json');
    rawdata = JSON.parse(rawdata)
    const idNo = req.body.mailId;
    console.log(idNo)
    const usersWithid = rawdata.filter((user) =>{
        return  user.mailId == idNo;  
     })
     if(usersWithid.length >0){
        res.send ("user alredy exists")
     }
     else {
        rawdata.push(req.body)
        fs.writeFileSync('users.json', JSON.stringify(rawdata));
    res.send('Added user');
     }  

 }


function getUserWithLasttName (req, res) {
    let data = fs.readFileSync('users.json');
    data = JSON.parse(data)
    const lastname = req.params.lname;
    const getUserWithLasttName = data.filter((user) =>{
       return user.lname.toLocaleLowerCase() == lastname.toLowerCase();
    })
    res.send(getUserWithLasttName);
}

function deleteUser(req,res) {
    let rawdata = fs.readFileSync('users.json');
    rawdata = JSON.parse(rawdata)
    const fName = req.params.fname;
    const deleteUsersWithFirstName = rawdata.filter((user) =>{
        return user.fname.toLocaleLowerCase() !== fName.toLowerCase();
    })
    fs.writeFileSync('users.json', JSON.stringify(deleteUsersWithFirstName));

    res.send(deleteUsersWithFirstName);
 }



module.exports = {
    getUsers,
    getUserWithFirstName,
    getUserWithLasttName,
    addUser,
    deleteUser
}