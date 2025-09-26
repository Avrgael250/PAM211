// Si el nombre de usuario es "admin", la promesa se resuelve con "Acceso concedido", si no,
// se rechaza con "Acceso denegado".
const promesa = new Promise((resolve, reject) => {
    verificarUsuario("admin")
        .then(res => resolve(res))
        .catch(err => reject(err));
        
});


// Usa .then() y .catch() para manejar el resultado
verificarUsuario = (username) =>{
    return new Promise((resolve, reject) =>{
        if(username === "admin"){
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    })
}

verificarUsuario("admin")
.then(res => document.write(res))
.catch(err => document.write(err)); // Acceso concedido

verificarUsuario("Willyrex")
.then(res => document.write(res))
.catch(err => document.write(err)); // Acceso denegado