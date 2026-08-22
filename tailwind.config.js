/** @type {import('tailwindcss').Config} */
module.exports = {
  // La pagina entera se arma como un template literal dentro de pages/index.js,
  // asi que ahi viven todas las clases. No hay JSX que escanear.
  content: ['./pages/**/*.js'],
  theme: { extend: {} },
  plugins: [],
}
