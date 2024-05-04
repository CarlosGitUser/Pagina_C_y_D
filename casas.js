

// Estructura de como estaran los objetos

let products = [
  {
    "id": 1,
    "img": "ajijic.webp",
    "titulo": "Ajujic, Mexico",
    "descripcion": "Vista a Montaña y lago",
    "precio": "$10,133 MXN",
    "tipo": "casa"
  },
  {
    "id": 2,
    "img": "costaCareyes.webp",
    "titulo": "Costa Careyes, Mexico",
    "descripcion": "Con vista al mar",
    "precio": "$45,748 MXN",
    "tipo": "casa"
  },
  {
    "id": 3,
    "img": "jalisco.webp",
    "titulo": "Jalisco, Mexico",
    "descripcion": "Vista a bosque y montañas",
    "precio": "$1,500 MXN",
    "tipo": "casa"
  },
  {
    "id": 4,
    "img": "mazamitla.webp",
    "titulo": "Mazamitla, Mexico",
    "descripcion": "Con vista a la Montaña. Tiene parrilla",
    "precio": "$1,760 MXN",
    "tipo": "casa"
  },
  {
    "id": 5,
    "img": "puertaZapatero.webp",
    "titulo": "Puerta del Zapatero, Mexico",
    "descripcion": "Vista a Montaña y valle",
    "precio": "$1,400 MXN",
    "tipo": "casa"
  },
  {
    "id": 6,
    "img": "sanJuan.webp",
    "titulo": "San Juan Cosala, Mexico",
    "descripcion": "Con vista al lago",
    "precio": "$12,000 MXN",
    "tipo": "casa"
  },
  {
    "id" : 7,
    "img" : "guadalajara.webp",
    "titulo" : "Guadalajara, Mexico",
    "descripcion" : "Departamento lujoso con maravillosa vista",
    "precio" : "2,600 MXN",
    "tipo" : "departamento"
  },
  {
    "id" : 8,
    "img" : "guadalajara2.webp",
    "titulo" : "Guadalajara, Mexico",
    "descripcion" : "Departamento moderno con buena posicion",
    "precio" : "1,792 MXN",
    "tipo" : "departamento"
  },
  {
    "id" : 9,
    "img" : "guadalajara3.webp",
    "titulo" : "Guadalajara, Mexico",
    "descripcion" : "Departamento deluxe, buena vista e ideal para la familia",
    "precio" : "2,800 MXN",
    "tipo" : "departamento"
  },
  {
    "id" : 10,
    "img" : "puertoVallarta.webp",
    "titulo" : "Puerto Vallarta, Mexico",
    "descripcion" : "Playa Bucecuas Nayarit",
    "precio" : "4,100 MXN",
    "tipo" : "departamento"
  },
  {
    "id" : 11,
    "img" : "puertoVallarta2.webp",
    "titulo" : "Puerto Vallarta, Mexico",
    "descripcion" : "Boca Beach. Vista al mar",
    "precio" : "6,250 MXN",
    "tipo" : "departamento"
  },
  {
    "id" : 12,
    "img" : "zapopan.webp",
    "titulo" : "Zapopan, Mexico",
    "descripcion" : "Apartado de la ciudad. Ambiente relajante",
    "precio" : "3,155 MXN",
    "tipo" : "departamento"
  }
];
/*
{
  "products" : [
    {
      "id": 1,
      "img": "ajijic.webp",
      "titulo": "Ajujic, Mexico",
      "descripcion": "Vista a Montaña y lago",
      "precio": "$10,133 MXN",
      "tipo": "casa"
    },
    {
      "id": 2,
      "img": "costaCareyes.webp",
      "titulo": "Costa Careyes, Mexico",
      "descripcion": "Con vista al mar",
      "precio": "$45,748 MXN",
      "tipo": "casa"
    },
    {
      "id": 3,
      "img": "jalisco.webp",
      "titulo": "Jalisco, Mexico",
      "descripcion": "Vista a bosque y montañas",
      "precio": "$1,500 MXN",
      "tipo": "casa"
    },
    {
      "id": 4,
      "img": "mazamitla.webp",
      "titulo": "Mazamitla, Mexico",
      "descripcion": "Con vista a la Montaña. Tiene parrilla",
      "precio": "$1,760 MXN",
      "tipo": "casa"
    },
    {
      "id": 5,
      "img": "puertaZapatero.webp",
      "titulo": "Puerta del Zapatero, Mexico",
      "descripcion": "Vista a Montaña y valle",
      "precio": "$1,400 MXN",
      "tipo": "casa"
    },
    {
      "id": 6,
      "img": "sanJuan.webp",
      "titulo": "San Juan Cosala, Mexico",
      "descripcion": "Con vista al lago",
      "precio": "$12,000 MXN",
      "tipo": "casa"
    },
    {
      "id" : 7,
      "img" : "guadalajara.webp",
      "titulo" : "Guadalajara, Mexico",
      "descripcion" : "Departamento lujoso con maravillosa vista",
      "precio" : "2,600 MXN",
      "tipo" : "departamento"
    },
    {
      "id" : 8,
      "img" : "guadalajara2.webp",
      "titulo" : "Guadalajara, Mexico",
      "descripcion" : "Departamento moderno con buena posicion",
      "precio" : "1,792 MXN",
      "tipo" : "departamento"
    },
    {
      "id" : 9,
      "img" : "guadalajara3.webp",
      "titulo" : "Guadalajara, Mexico",
      "descripcion" : "Departamento deluxe, buena vista e ideal para la familia",
      "precio" : "2,800 MXN",
      "tipo" : "departamento"
    },
    {
      "id" : 10,
      "img" : "puertoVallarta.webp",
      "titulo" : "Puerto Vallarta, Mexico",
      "descripcion" : "Playa Bucecuas Nayarit",
      "precio" : "4,100 MXN",
      "tipo" : "departamento"
    },
    {
      "id" : 11,
      "img" : "puertoVallarta2.webp",
      "titulo" : "Puerto Vallarta, Mexico",
      "descripcion" : "Boca Beach. Vista al mar",
      "precio" : "6,250 MXN",
      "tipo" : "departamento"
    },
    {
      "id" : 12,
      "img" : "zapopan.webp",
      "titulo" : "Zapopan, Mexico",
      "descripcion" : "Apartado de la ciudad. Ambiente relajante",
      "precio" : "3,155 MXN",
      "tipo" : "departamento"
    }
  ]
}*/
