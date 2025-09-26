const persona = {
  nombre: "Gael Calderón",
  edad: "18",
  dirección: {
    ciudad: "Qro",
    pais: "MX",
  },
};

const {
  nombre,
  edad,
  dirección: { ciudad },
} = persona;
document.write(`Hola me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);