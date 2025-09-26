function verificarUsuario(username) {
    return new Promise((resolve, reject) => {
        if(username === "admin") {
            resolve({ acceso: true, mensaje: "Acceso concedido"});
        } else {
            reject({ acceso: false, mensaje: "Acceso denegado"});
        }     
    });
}


verificarUsuario("admin")
    .then(res => {
        if(res.acceso) {
            console.log(res.mensaje);
    }
})
    .catch(err => {
        if(!err.acceso) {
            console.log(err.mesaje);
    }
});
