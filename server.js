var admin = require("firebase-admin");

var serviceAccount = require("./Final-Project-Key.json");

exports = module.exports = {};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://final-project-database-54bcf.firebaseio.com"
});

var db = admin.database()

var ref = db.ref()

// ref.once("value",function(snapshot){
//     console.log(snapshot.val());
// })

var usersRef = ref.child('users')

// usersRef.set({
//     chris_khau:{
//         birthdate: "June 2",
//         fullName: "Chris Khau"
//     }
// })


exports.addUser = (username,email,password) => {
    usersRef.push({
        username:username,
        email:email,
        password:password
    })
}
function getData(){
    ref.once("value").then(function(snapshot){
        //console.log ("this is users:", snapshot.val().users)
        return snapshot.val().users
    })
}
function callback(){
    
}
exports.DoSomething = () =>{
    var string = "something"
    var seomthing = getData()
    console.log(seomthing);
    return string;
    
}
exports.getUsers = function(){
    console.log("this is runing")
    db.ref('/users/').once("value").then(function(snapshot) {
        var string = "someting"
        return string
//        console.log("these are some objets:",Object.entries(snapshot.val().users))
        var ListOfUsers = Object.entries(snapshot.val().users)
        for (var i = 0; i< ListOfUsers.length;i++){
            // console.log("ListOfUsers[i]:" , ListOfUsers[i])
            // console.log ("ListOfUsers[i][0]", ListOfUsers[i][1])
            ListOfUsers[i] = Object.values(ListOfUsers[i][1])
        }
//        console.log(ListOfUsers);
        //userArray[i][1] = Object.values(userArray[i][1])[0];
        return ListOfUsers
        for (x in ListOfUsers){
            if (login_username === x){
                if (ListOfUsers[x].password === login_password){
                    console.log("does this work?");
                    var message = {bool:true,
                        message:"login information is correct"}
                    return message; 
                }
                else {
                    console.log("does this work?");
                    var message = {bool:false,message:"this is not the right password"}
                    return message;
                }
            }

    }
    console.log("does this work?");
    var message = {bool:false,message:"this user does not exist"}
    return message
    })
}
exports.addDifferentUser = (username,email,password) =>{
    db.ref('/users/').once("value", function(snapshot) {
        var ListOfUsers = snapshot.val().users
        for (x in ListOfUsers){
            if (username == x){
                console.log("Sorry this username is taken")
                return
            }
    }

    usersRef.child(`${username}`).set({
        email:email,
        password:password,
        win:0,
        lose:0,
        tie:0,
    })
    console.log(`Thank you for signing up ${username}`)
})
}

    
    
    

// exports.checkUsers = () =>{
// ref.on("value", function(snapshot) {
//     console.log(snapshot.val().users);


//         var keys = Object.keys(ListOfUsers[x])
//         console.log(keys);
//         console.log(`username is ${x} the email is ${ListOfUsers[x].email} and the password is ${x.password}`)

//     }
//   })
// }
// usersRef.child("alanisawesome").set({
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   });

// export function addUser(username,email,password){
// }