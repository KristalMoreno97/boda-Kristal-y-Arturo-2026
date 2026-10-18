/* =====================================================================
   DATOS DE LA INVITACIÓN: aquí es lo único que normalmente editas
   ===================================================================== */
const CONFIG = {
  novia: "Kristal",
  novio: "Arturo",
  iniciales: "K  A",                      // lo que aparece en el sello dorado
  fecha: "2026-12-18T17:00:00",           // AÑO-MES-DÍA T HORA (24h)
  fondo: "fotos/fondo1.jpg",              // imagen de fondo (vacío "" = mesa dibujada)
  mensaje: [
    "Una mirada que lo cambió todo, un encuentro inesperado y dos caminos que estaban destinados a encontrarse...",
    "Con la bendición de Dios y el amor de nuestras familias, queremos dar el sí rodeados de quienes más queremos.",
    "Nos haría muy felices que estés ahí."
  ],
  ceremonia: { lugar: "Parroquia Santa Eduwiges", direccion: " C. Israel González S/N, Modelo, 83190 Hermosillo, Son.", hora: "8:00 pm", mapa: "" },
  recepcion: { lugar: "Jardín Lucrecia",  direccion: "Av. Lucrecia Ruiz de Ayón #49, Col. Villa de Cortés / San Luis Rey, Hermosillo, Son. (a un lado de Oky Doky).", hora: "9:00 pm", mapa: "" },
  itinerario: [                           // el orden del día: agrega, quita o cambia lo que quieras
    { hora: "8:00",  ampm: "P.M.", titulo: "El sí",      texto: "La ceremonia en la Parroquia Santa Eduwiges. Los esperamos con el corazón listo." },
    { hora: "9:00",  ampm: "P.M.", titulo: "El brindis", texto: "Nos vemos en el Jardín Lucrecia para brindar juntos." },
    { hora: "10:00", ampm: "P.M.", titulo: "La cena",    texto: "Comer rico, conversar largo y disfrutar la mesa." },
    { hora: "11:30", ampm: "P.M.", titulo: "La fiesta",  texto: "Bailar es requisito." }
  ],
  vestimenta: "Formal elegante",          // el título grande
  vestimentaEllos: "Vestimenta semi formal o formal (No mezclilla)",
  vestimentaEllas: "Vestido largo o mini formal (No mezclilla ni blanco)",
  colorEllos: "#2f3b52",                  // color del traje en el dibujo
  colorEllas: "#a9b38c",                  // color del vestido en el dibujo
  vestimentaNota: "",    
    menu: {
    eyebrow: "Menú",
    titulo1: "Para compartir",
    titulo2: "la mesa",
    platoTitulo: "Plato fuerte",
    plato: "Pechuga de pollo rellena de jamón y queso, bañada en salsa de queso, con verduras cocidas y puré de papa.",
    snackTitulo: "Snack",
    snack: "Postres salados y dulces para seguir la noche.",
    bebidasTitulo: "Bebidas",
    bebidas: "Cerveza de barril y una sodita para después de tanto baile."
  },                 // ej. "Favor de no usar blanco" (vacío = no aparece)
  regalos: {
    titulo1: "Tu presencia es",
    titulo2: "nuestro regalo",
    texto: "Si deseas tener un detalle con nosotros, aqui tienes nuestra cuenta, ese día también habrá un buzón para sobres. ¡Gracias por acompañarnos!",
    cuenta: {
      banco: "Santander",
      titular: "Yoshelyn Kristal Moreno Almeida",
      clabe: "25015919408",
      tarjeta: "5579 0830 4910 1963",
      nota: "Gracias de corazón"
    }
  },
  confirmacion: {
    eyebrow: "Confirmación",
    titulo1: "Una carta",
    titulo2: "de vuelta",
    texto: "Hay un lugar en nuestra mesa que solo tú puedes ocupar. Confírmanos por favor antes del 20 de Noviembre 2026 .",
    saludo: "Queridos Kristal y Arturo,",
    maxPersonas: 2
  },
  whatsapp: "526621375522",                           // ej. "5216621234567" (con lada, sin + ni espacios). Vacío = oculta el botón
  whatsappMensaje: "¡Hola! Confirmo mi asistencia a la boda.",
  foto: "fotos/foto1.jpg",                // tu foto de los novios
  musica: "musica.mp3"                    // opcional: si no existe el archivo, no aparece el botón
};