const plansData = [
    {
        "plan": "Amazonia",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "23€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Parque Europa",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Aquopolis",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "19.99€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Bubbletea Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Palacio De Hielo",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "12€ mañana, 14€ tarde",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Barcas Retiro",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "6€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Padel Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "2.20€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Tenis Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "2.20€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Patinaje Xmadrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Rápidos Rio Tajo",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "35€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Atoope Park",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "12€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Karting",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "20€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Lego Parquesur",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Warner Beach",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "19.90€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Animal Crossing",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Kayak Duratón",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "16.20€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Nacimiento Del Ebro",
        "location": "Cantabria",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "La Pedriza",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "La Ruta De La Jara",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "McQueen",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "6€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Ppt Año En California",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Picnic Río Parque Del Oeste",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Leones Marinos Faunia",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "50.90€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Cuenca - Tirolina Más Larga De Europa",
        "location": "Cuenca",
        "indoor_outdoor": "Outdoor",
        "price": "25€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Huesca - Tirolina Más Rápida Del Mundo",
        "location": "Huesca",
        "indoor_outdoor": "Outdoor",
        "price": "44.90€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Rastro",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Embalse De San Juan Kayaks",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "9€ 1h, 13€ 2h",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Kayak Cazalegas",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "22€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Pepito De Crema La Mallorquina",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Tour Santiago Bernabeu",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "35€, 28€ con carné",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Campo De Criptana/Consuegra (Molinos)",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Apuntes Detrás De Las Fotos (Beadactilo)",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Museo Del Jamón",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Alehop",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Círculo De Bellas Artes",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "10€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Hotel Riu Terraza",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "10€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Amorino Corte Inglés",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Churros En Chocolatería San Ginés",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Tiendas De Souvenirs Sol",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Terraza Salvador Bachiller",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Sushido Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "15€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Museo Del Prado",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Museo Del Aire Y Del Espacio",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Ramen Calle Leganitos",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Koi Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "8€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Dorayakis Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Warner",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "29.90€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "El Prado Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Ikea",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "La Ciudad De Las Artes Y Las Ciencias",
        "location": "Valencia",
        "indoor_outdoor": "Outdoor",
        "price": "42.70€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Toledo",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ávila",
        "location": "Ávila",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "El Escorial",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "7€, 0€ a veces",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Segovia",
        "location": "Segovia",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Autocine Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7€-9€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mutua Madrid Open",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "70€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Tienda Cerámica Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Croquetas Sol",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Bar Croquetas Tenis",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Museo Naval Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Palacio De Cristal",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Caramelos Paco",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Estación Gran Vía",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Flechas Primark",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Casa Del Libro",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Museo De Cerámica Ruiz De Luna",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Helado Gallego Calle Arenal",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Terraza Cr7",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Outlet Real Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Visita Palacio Real",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "6€, 0€ a veces",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Lenguas De Gato La Mayorquina",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "La Playa De Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mercado San Miguel",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Fitur",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "13.20€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Turrón Donut Vicens Vives",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Sweet Pirate Chuches",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Casa Mira",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Duck Store Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Plaza Mayor",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Plaza Mayor Mercado Navideño",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Restaurante Botín (Más Antiguo Del Mundo)",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Plaza Mayor Bocadillo De Calamares",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Xanadu",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Ikea (Comida)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Medievales Ávila",
        "location": "Ávila",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Museo Chamberí Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Llao Llao",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Pontejos",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Casa Museo Del Ratoncito Pérez",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Plaza Rio 2",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Fotomaton Faunia",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "3€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "La Mayorquina Menú Degustación",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Doña Manolita",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "La Rosaleda (Retiro)",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Las Rozas Village",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Ver Final Nadal Federer 2008",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Camiseta Aniversario (Collage)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Pantalón Ganchillo Thick Fil A",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Aniversario Pista De Patinaje (Hamburguesas Caras)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "20€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Jumplandia",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "10€ semana, 12€ finde",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Museo De Historia Natural De Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Templo De Debod",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Salto De Poveda, Parque Natural Del Alto Tajo",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Tierra Burrito",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "8€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Las Becerras",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Bolera Parquesur",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Tiki Tako Clavel Gran Vía",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Mobility Museum",
        "location": "Zaragoza",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Poke House",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "9€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Disneyland London 2024 / 2029",
        "location": "London",
        "indoor_outdoor": "Outdoor",
        "price": "80€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mini Golf Las Rozas",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "10€ con reserva",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Sushi Shan",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "14€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Replay Outlet Boardgame Cafe",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ceramica En Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Plane Sightseeing En Barajas",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mistura",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Caja De Macarons",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Moscovitas",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "19€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Filipinos",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "1.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Véneta",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Friendship Bracelets",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Guirnalda Ganchillo",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Pista De Hielo Colon / Matadero",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "6€/30min",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mochi Corte Inglés Club Gourmet",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Bubble Tea Pio",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Scalextric Tres Aguas",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "1.5€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Macayaki",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Parque De Atenas (Flechas)",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Aguarales De Valpalmas",
        "location": "Zaragoza",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Belen Del Ayuntamiento Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Roli Rolls",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "1.75€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Filipo Pizza",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "15€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Lanzarote",
        "location": "Canarias",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ruta De Las Maravillas",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ojo Del Buey",
        "location": "Asturias",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Caminito Del Rey",
        "location": "Málaga",
        "indoor_outdoor": "Outdoor",
        "price": "10€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Montaña Artificial Del Retiro",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Cueva De Las Palomas",
        "location": "Valencia",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Fuente De Los Baños",
        "location": "Castellón",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "El Parrizal",
        "location": "Teruel",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Baños Romanos De La Hedionda",
        "location": "Málaga",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Mananatial De La Salud Del Arroyo, Parque Del Oeste",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Cañon Del Rio Lozoya",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Shangrilla Dimsun Calle Leganitos",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Exposicion Telefonica Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Takomama",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Chun Li",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Pez Tortilla",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Fuentes De La Granja De San Ildefonso",
        "location": "Segovia",
        "indoor_outdoor": "Outdoor",
        "price": "4€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Piscina Hotel Cool Rooms Palacio De Atocha",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Chinchón",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Sepúlveda",
        "location": "Segovia",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Patones De Arriba",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Sigüenza",
        "location": "Guadalajara",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Buitrago Del Lozoya",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ayllón",
        "location": "Segovia",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Museo Arqueológico Nacional + Replica Altamira, Calle Serrano",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "1.5€, 0€ a veces",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ajedrez Con Macaggons",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Tabetai España (Crepes)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Ruta De Las Cárcavas",
        "location": "Madrid; Guadalajara",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Laberinto De Peñíscola",
        "location": "Castellón",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Museo Del Turrón (Madrid)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "1.5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Teleférico",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Torre Moncloa",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Hacer Udon",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Hacer Gyozas",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Kuraya",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Trineo Navacerrada",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Nerfs",
        "location": "Madrid; Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Show Luces Parque Europa",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Parque El Capricho",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "El Hachazo (3 Opciones)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "14€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Altitude Park (15% Carné Joven)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "13€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "La Tortilla 2.0",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "2.5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Parque De La Quinta De Los Molinos",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Maillard Smash Burguer",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "6€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Museo Geominero",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Ramen Shifu",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Kaiten Sushi",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "14.95€-18€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Espacio Iberia Callao",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Sufu Cake",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5.90€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Gioelia (Granizado Italiano)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Normal Principe Pio",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Libreria Principe Pio",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "2x26 Camisetas Principe Pio",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "13€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Jardín Botánico De Madrid",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "2€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Palazzo",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Açai Amazonia",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Revuelto (Sandwiches Coreanos)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "7.5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Museo De La Aviacion De Getafe",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Bar Una Grande Libre (Chino Franquista)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "La Federala",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "12€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "La Alhambra",
        "location": "Granada",
        "indoor_outdoor": "Indoor",
        "price": "30€ con tour",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "En Busca Del Tiempo (Vasco)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Marihuana Bronca Total (Camiseta Green Day)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "20€",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Piscina Puerta De Hierro",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "El Esquinazo (Tostas Gigantes)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Outlet C/ Virgen Del Sagrario, 3",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "El Descenso Del Sella",
        "location": "Asturias",
        "indoor_outdoor": "Outdoor",
        "price": "16€ doble, 25€ indiv.",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Restaurante A Ri Rang (Buffet Libre Korean Bbq)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "21.50€-24.50€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "El Faro Del Caballo",
        "location": "Cantabria",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Laberinto Del Parque De Tentegorra",
        "location": "Cartagena",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Tren Histórico De Arganda",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "7€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "La Fresería",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "5€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "La Ciudad De Los Niños (Tres Cantos)",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Jardín Banca March (C/ De Castelló, 75)",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Pasaporte Metro (Chamberí)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Bolera Sambil",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4.5€-6€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Nunuka Madrid (Comida Georgiana)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "25€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Salt In Cake (Cinnamon Rolls)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "3.9€",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Virtuastation (Parque De Vr)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "5€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Tour Gratis Kaicao Madrid (Chocolate)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "Yes",
        "done": "No"
    },
    {
        "plan": "Callejón Madriagón (X Madrid)",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Camino De Hierro (Parque Natural De Las Arribes Del Duero)",
        "location": "Salamanca",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Parque De Los Sifones",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Museo Etnográfico",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Piedralaves (Desde Talavera)",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Yucatan X Godzilla",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "10€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Embalse De Bolarque",
        "location": "Guadalajara",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Heladeria Rocambolesc",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "4€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Parque Natural De Las Bardenas Reales",
        "location": "Navarra",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Frigopie",
        "location": "Talavera",
        "indoor_outdoor": "Indoor",
        "price": "2€",
        "eating": "Yes",
        "done": "Yes"
    },
    {
        "plan": "Aranjuez",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Bosque Encantado",
        "location": "Madrid",
        "indoor_outdoor": "Outdoor",
        "price": "12€",
        "eating": "No",
        "done": "No"
    },
    {
        "plan": "Caixaforum: Patagonia",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Caixaforum: Pixar",
        "location": "Madrid",
        "indoor_outdoor": "Indoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    },
    {
        "plan": "Monolitos Talavera",
        "location": "Talavera",
        "indoor_outdoor": "Outdoor",
        "price": "Free",
        "eating": "No",
        "done": "Yes"
    }
]; 

export default plansData;