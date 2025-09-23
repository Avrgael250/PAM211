const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 },
];

const encontrado = personas.find((persona) => persona.nombre === "Luis");
personas.forEach((persona) => {
  document.write(`Nombres: ${persona.nombre} Edad: ${persona.edad} <br>`);
});
const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
document.write(`La suma de las edades es: ${totalEdad}`);
