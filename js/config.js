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
    { hora: "12:30",  ampm: "P.M.", titulo: "El sí",      texto: "La ceremonia en la Parroquia Santa Eduwiges. Donde uniremos nuestras vidas con amor y la bendición de Dios." },
    { hora: "9:00",  ampm: "P.M.", titulo: "El sí del civil", texto: "Nos vemos en el Jardín Lucrecia para la firma definitiva." },
    { hora: "9:30",  ampm: "P.M.", titulo: "El brindis", texto: "Los esperamos para brindar juntos." },
    { hora: "10:00", ampm: "P.M.", titulo: "La cena",    texto: "Comer rico, conversar largo y disfrutar la mesa." },
    { hora: "10:00", ampm: "P.M.", titulo: "El Primer Baile",    texto: "Dos corazones, una canción y toda una vida para seguir bailando juntos." },
    { hora: "10:30", ampm: "P.M.", titulo: "La fiesta",  texto: "Bailar es requisito." },
    { hora: "12:30", ampm: "P.M.", titulo: "La hora loca",  texto: "Luces arriba, carteles al aire y ¡todos a seguir bailando!." }
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
  },   
      paleta: {
    eyebrow: "Paleta de colores",
    titulo1: "Colores",
    titulo2: "sugeridos",
    texto: "Nos encantará que nos acompañes con tonos de nuestra boda.",
    colores: [
      { nombre: "Verde olivo", hex: "#5E6F2D" },
      { nombre: "Verde salvia", hex: "#8FA36A" },
      { nombre: "Mostaza", hex: "#C99E24" },
      { nombre: "Amarillo claro", hex: "#EBD06F" },
      { nombre: "Arena", hex: "#E2B786" },
      { nombre: "Verde bosque", hex: "#3B3F2A" }
    ],
    nota: "Si no cuentas con alguno de estos tonos, ¡no te preocupes! Lo más importante para nosotros es compartir este día contigo."
  },     // ej. "Favor de no usar blanco" (vacío = no aparece)
     regalos: {
    titulo1: "Tu presencia es",
    titulo2: "nuestro regalo",
    texto: "Si deseas tener un detalle con nosotros, aquí tienes nuestra cuenta y nuestras mesas de regalos. Ese día también habrá un buzón para sobres. ¡Gracias por acompañarnos!",
    cuenta: {
      banco: "Santander",
      titular: "Yoshelyn Kristal Moreno Almeida",
      clabe: "25015919408",
      tarjeta: "5579 0830 4910 1963",
      nota: "Gracias de corazón"
    },
    mesas: [
      { nombre: "Mesa de regalos Liverpool", url: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60064406" },
      { nombre: "Mesa de regalos Amazon", url: "https://www.amazon.com.mx/wedding/guest-view/3102XEVOHPDHZ" }
    ]
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