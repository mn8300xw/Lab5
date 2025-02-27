
let user = {username: 'vanessa', password: 'zebra'}

console.log(user.username);
console.log(user['username']);

console.log(user.password);
console.log(user['password']);

let whatProperty = 'password';
console.log(user[whatProperty]);

let usernameProperty = 'username';
console.log(user[usernameProperty]);

user.password = 'elephant';
console.log(user);

user['password'] = 'alligator';
console.log(user);

user.email = 'vanessa@minneapolis.edu'
console.log(user)
console.log(user.email);

let jobUser = {
    name: 'vanessa',
    password: 'zebra',
    email: 'vanessa@minneapolis.edu',
    roles: ['administrator', 'programmer'],
    contact: {
        office: 'M1234',
        telephone: '6122345678'
    }
}

jobUser.salary = 12345
jobUser.roles.push('server admin')
jobUser.contact.location = 'Minneapolis'

console.log(jobUser);