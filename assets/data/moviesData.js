const moviesData = [
    {
        "title": "10 Reasons Why I Hate You",
        "type": "Movie",
        "duration": "1h 37m",
        "genre": "Drama",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "21 Jump Street",
        "type": "Movie",
        "duration": "1h 50m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "8 Apellidos Marroquíes",
        "type": "Movie",
        "duration": "1h 40m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "A Quiet Place Day One",
        "type": "Movie",
        "duration": "1h 39m",
        "genre": "Thriller",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Acero Puro",
        "type": "Movie",
        "duration": "2h 7m",
        "genre": "Sci-Fi",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Ahsoka",
        "type": "Series",
        "duration": "8 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "AI: Artificial Intelligence",
        "type": "Movie",
        "duration": "2h 26m",
        "genre": "Sci-Fi",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Alicia En El País De Las Maravillas 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Fantasy",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Arcane",
        "type": "Series",
        "duration": "9 ep",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Arcane Season 2",
        "type": "Series",
        "duration": "TBA",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Arthur",
        "type": "Movie",
        "duration": "1h 48m",
        "genre": "Drama",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Baby Driver",
        "type": "Movie",
        "duration": "1h 53m",
        "genre": "Action",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Babylon",
        "type": "Movie",
        "duration": "3h 9m",
        "genre": "Comedy; Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Bad Boys 1, 2 y 3",
        "type": "Saga",
        "duration": "6h",
        "genre": "Action",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Bad Boys Ride Or Die",
        "type": "Movie",
        "duration": "1h 55m",
        "genre": "Action",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Barbie",
        "type": "Movie",
        "duration": "1h 54m",
        "genre": "Comedy",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Battleship",
        "type": "Movie",
        "duration": "2h 11m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Birdbox",
        "type": "Movie",
        "duration": "2h 4m",
        "genre": "Thriller",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Blade Runner",
        "type": "Movie",
        "duration": "1h 57m",
        "genre": "Sci-Fi",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Break Point",
        "type": "Series",
        "duration": "10 ep",
        "genre": "Documentary",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Breaking Bad",
        "type": "Series",
        "duration": "62 ep",
        "genre": "Thriller",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Bullet Train",
        "type": "Movie",
        "duration": "2h 7m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Bumblebee",
        "type": "Movie",
        "duration": "1h 54m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Campeonex",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Comedy",
        "platform": "Max",
        "status": "Watched"
    },
    {
        "title": "Carrie",
        "type": "Movie",
        "duration": "1h 38m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Cars On The Road  (Ka-Chow)",
        "type": "Series",
        "duration": "9 ep",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Cazafantasmas: Imperio Helado",
        "type": "Movie",
        "duration": "1h 55m",
        "genre": "Comedy",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Cementerio De Animales",
        "type": "Movie",
        "duration": "1h 43m",
        "genre": "Horror",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Coco",
        "type": "Movie",
        "duration": "1h 45m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Community",
        "type": "Series",
        "duration": "110 ep",
        "genre": "Comedy",
        "platform": "Prime; Disney+",
        "status": "Watching"
    },
    {
        "title": "Cómo Entrenar A Tu Dragon",
        "type": "Saga",
        "duration": "4h",
        "genre": "Animation",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Crazy Rich Asians",
        "type": "Movie",
        "duration": "2h",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Crepúsculo Saga",
        "type": "Saga",
        "duration": "2h 2m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Cruella",
        "type": "Movie",
        "duration": "2h 14m",
        "genre": "Drama",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Cry Macho",
        "type": "Movie",
        "duration": "1h 44m",
        "genre": "Drama",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Dark",
        "type": "Series",
        "duration": "26 ep",
        "genre": "Sci-Fi",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Deadpool y Lobezno",
        "type": "Movie",
        "duration": "2h 7m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Doctor Strange : Multiverse Of Madness",
        "type": "Movie",
        "duration": "2h 6m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Doctor Sueño",
        "type": "Movie",
        "duration": "2h 32m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Documental Roger Federer",
        "type": "Movie",
        "duration": "1h 28m",
        "genre": "Biography",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Dos Rubias De Pelo En Pecho",
        "type": "Movie",
        "duration": "1h 49m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Eduardo Manostijeras",
        "type": "Movie",
        "duration": "1h 45m",
        "genre": "Drama",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "El Aviador",
        "type": "Movie",
        "duration": "2h 50m",
        "genre": "Biography",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "El Código Enigma",
        "type": "Movie",
        "duration": "1h 53m",
        "genre": "Biography",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "El Gato Con Botas",
        "type": "Movie",
        "duration": "1h 42m",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "El Juego De Ender",
        "type": "Movie",
        "duration": "1h 54m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "El Llanero Solitario",
        "type": "Movie",
        "duration": "2h 29m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "El Niño Del Pijama De Rayas",
        "type": "Movie",
        "duration": "1h 34m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "El Padrino 1, 2 y 3",
        "type": "Saga",
        "duration": "8h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "El Planeta De Los Simios",
        "type": "Movie",
        "duration": "7h",
        "genre": "Sci-Fi",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "El Reino Del Planeta De Los Simios",
        "type": "Movie",
        "duration": "2h 25m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "El Resplandor",
        "type": "Movie",
        "duration": "2h 26m",
        "genre": "Thriller",
        "platform": "Max",
        "status": "Not watched"
    },
    {
        "title": "Elemental",
        "type": "Movie",
        "duration": "1h 49m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Elvis",
        "type": "Movie",
        "duration": "2h 39m",
        "genre": "Drama",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Encanto",
        "type": "Movie",
        "duration": "1h 49m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Erase Una Vez En Hollywood",
        "type": "Movie",
        "duration": "2h 40m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Escape Room 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Extracción 1 y 2",
        "type": "Movie",
        "duration": "4h",
        "genre": "Action",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Fast And Furious Saga",
        "type": "Saga",
        "duration": "20h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watching"
    },
    {
        "title": "Fear Street 1, 2 y 3",
        "type": "Saga",
        "duration": "5h",
        "genre": "Thriller",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Fiebre Del Sabado Noche",
        "type": "Movie",
        "duration": "1h 58m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Fly Me To The Moon",
        "type": "Movie",
        "duration": "2h 11m",
        "genre": "Comedy",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Ford V Ferrari",
        "type": "Movie",
        "duration": "2h 32m",
        "genre": "Biography",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Forrest Gump",
        "type": "Movie",
        "duration": "2h 22m",
        "genre": "Drama",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Freedom Writers",
        "type": "Movie",
        "duration": "2h 3m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Friends",
        "type": "Series",
        "duration": "236 ep",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Furia De Titanes",
        "type": "Movie",
        "duration": "1h 46m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Gambito De Dama",
        "type": "Series",
        "duration": "7 ep",
        "genre": "Drama",
        "platform": "Netflix; Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Gifted",
        "type": "Movie",
        "duration": "1h 41m",
        "genre": "Drama",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Godzilla y Kong: El Nuevo Imperio",
        "type": "Movie",
        "duration": "1h 55m",
        "genre": "Action",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Gran Torino",
        "type": "Movie",
        "duration": "1h 56m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Gran Turismo",
        "type": "Movie",
        "duration": "2h 15m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Grease",
        "type": "Movie",
        "duration": "1h 45m",
        "genre": "Musical",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Greyhound",
        "type": "Movie",
        "duration": "1h 31m",
        "genre": "Action",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Grown Ups 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Guardiana De Dragones",
        "type": "Movie",
        "duration": "1h 40m",
        "genre": "Animation",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Guardianes De La Galaxia 1, 2 y 3",
        "type": "Saga",
        "duration": "5h",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Hachiko",
        "type": "Movie",
        "duration": "1h 33m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Happy Gilmore",
        "type": "Movie",
        "duration": "1h 32m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Harry Potter",
        "type": "Saga",
        "duration": "20h",
        "genre": "Fantasy",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Hidden Figures",
        "type": "Movie",
        "duration": "2h 7m",
        "genre": "Biography",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Hobbit",
        "type": "Saga",
        "duration": "8h",
        "genre": "Fantasy",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "I Wanna Dance With Somebody",
        "type": "Movie",
        "duration": "2h 24m",
        "genre": "Biography",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Indiana Jones",
        "type": "Movie",
        "duration": "10h",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Indiana Jones y El Dial Del Destino",
        "type": "Movie",
        "duration": "2h 34m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Inside Out 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Ira De Titanes",
        "type": "Movie",
        "duration": "1h 39m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Isn't It Romantic?",
        "type": "Movie",
        "duration": "1h 29m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "John Wick 1, 2, 3 y 4",
        "type": "Saga",
        "duration": "9h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Joker 2",
        "type": "Movie",
        "duration": "TBA",
        "genre": "Action",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Juego De Armas",
        "type": "Movie",
        "duration": "1h 54m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Jurassic Park",
        "type": "Saga",
        "duration": "7h 30m",
        "genre": "Sci-Fi",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Jurassic World",
        "type": "Saga",
        "duration": "7h30",
        "genre": "Sci-Fi",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "King Richard",
        "type": "Movie",
        "duration": "2h 24m",
        "genre": "Biography",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Kung Fu Panda 4",
        "type": "Movie",
        "duration": "1h 30m",
        "genre": "Animation",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "La Bella y La Bestia (Emma Watson)",
        "type": "Movie",
        "duration": "2h 9m",
        "genre": "Musical",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "La Cita De Carl",
        "type": "Movie",
        "duration": "7m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "La Novia Cadaver",
        "type": "Movie",
        "duration": "1h 17m",
        "genre": "Animation",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "La Sirenita",
        "type": "Movie",
        "duration": "2h 15m",
        "genre": "Musical",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Las Crónicas De Narnia 1-4",
        "type": "Saga",
        "duration": "10h",
        "genre": "Adventure",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Las Ventajas De Ser Un Marginado",
        "type": "Movie",
        "duration": "1h 43m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Legally Blonde",
        "type": "Movie",
        "duration": "1h 36m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Lift",
        "type": "Movie",
        "duration": "1h 39m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Lightyear",
        "type": "Movie",
        "duration": "1h 45m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Lilo & Stitch 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Lobezno y Logan",
        "type": "Saga",
        "duration": "5h",
        "genre": "Sci-Fi",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Locke & Key",
        "type": "Series",
        "duration": "28 ep",
        "genre": "Fantasy",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Loki",
        "type": "Series",
        "duration": "12 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Lord Of The Rings",
        "type": "Saga",
        "duration": "12h",
        "genre": "Fantasy",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Los Becarios",
        "type": "Movie",
        "duration": "1h 59m",
        "genre": "Comedy",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Los Croods 1 y 2",
        "type": "Movie",
        "duration": "3h",
        "genre": "Animation",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Los Increibles 3",
        "type": "Movie",
        "duration": "TBA",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Los Juegos Del Hambre: Balada De Pájaros Cantores y Serpientes",
        "type": "Movie",
        "duration": "2h 37m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "LOTR: Rings Of Power",
        "type": "Series",
        "duration": "8 ep",
        "genre": "Fantasy",
        "platform": "Prime",
        "status": "Watching"
    },
    {
        "title": "Luca",
        "type": "Movie",
        "duration": "1h 35m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Magic Mike",
        "type": "Movie",
        "duration": "1h 50m",
        "genre": "Comedy",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Malditos Bastardos",
        "type": "Movie",
        "duration": "2h 33m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Mamma Mia 1 y 2",
        "type": "Movie",
        "duration": "4h",
        "genre": "Musical",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Mean Girls",
        "type": "Movie",
        "duration": "1h 37m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Megalodon 2",
        "type": "Movie",
        "duration": "1h 56m",
        "genre": "Action",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Memorias De Un Asesino Internacional",
        "type": "Movie",
        "duration": "1h 37m",
        "genre": "Comedy",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Men In Black",
        "type": "Saga",
        "duration": "1h 38m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Mientras Dure La Guerra",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Million Dollar Baby",
        "type": "Movie",
        "duration": "2h 12m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Minions",
        "type": "Saga",
        "duration": "1h 31m",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Minions: The Rise Of Gru",
        "type": "Movie",
        "duration": "1h 27m",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Misery",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Modern Family",
        "type": "Series",
        "duration": "250 ep",
        "genre": "Comedy",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Nacho Libre",
        "type": "Movie",
        "duration": "1h 32m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Napoleón",
        "type": "Movie",
        "duration": "2h 30m",
        "genre": "Biography",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Ninja Turtles: Caos Mutante",
        "type": "Movie",
        "duration": "1h 39m",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Noche En El Museo Trilogía",
        "type": "Saga",
        "duration": "6h",
        "genre": "Comedy",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Obi-Wan",
        "type": "Series",
        "duration": "6 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Oppenheimer",
        "type": "Movie",
        "duration": "3h",
        "genre": "Biography",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Ordinary World",
        "type": "Movie",
        "duration": "1h 27m",
        "genre": "Comedy; Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Origen",
        "type": "Movie",
        "duration": "2h 28m",
        "genre": "Sci-Fi",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Pacific Rim",
        "type": "Movie",
        "duration": "2h 11m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Percy Jackson y Los Dioses Del Olimpo",
        "type": "Series",
        "duration": "8 ep",
        "genre": "Adventure",
        "platform": "Disney+",
        "status": "Watching"
    },
    {
        "title": "Pesadilla Antes De Navidad",
        "type": "Movie",
        "duration": "1h 16m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Piratas Del Caribe",
        "type": "Saga",
        "duration": "10h",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Pobres Criaturas",
        "type": "Movie",
        "duration": "2h 21m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Polar Express",
        "type": "Movie",
        "duration": "1h 40m",
        "genre": "Animation",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Pretty Woman",
        "type": "Movie",
        "duration": "1h 59m",
        "genre": "Comedy",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Pulp Fiction",
        "type": "Movie",
        "duration": "2h 34m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "Quantumania",
        "type": "Movie",
        "duration": "2h 5m",
        "genre": "Sci-Fi",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Rebel Moon",
        "type": "Movie",
        "duration": "2h 15m",
        "genre": "Action",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Rogue One",
        "type": "Movie",
        "duration": "2h 13m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Rush",
        "type": "Movie",
        "duration": "2h 3m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Rush Hour",
        "type": "Saga",
        "duration": "1h 38m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Salem's Lot",
        "type": "Movie",
        "duration": "1h 52m",
        "genre": "Thriller",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "School Of Rock",
        "type": "Movie",
        "duration": "1h 48m",
        "genre": "Comedy",
        "platform": "None",
        "status": "Not watched"
    },
    {
        "title": "Secret Invasion",
        "type": "Series",
        "duration": "6 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watching"
    },
    {
        "title": "Serpientes En El Avión",
        "type": "Movie",
        "duration": "1h 45m",
        "genre": "Action",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Solo",
        "type": "Movie",
        "duration": "2h 15m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Soy Leyenda",
        "type": "Movie",
        "duration": "1h 41m",
        "genre": "Sci-Fi",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Spiderman Cruzando El Multiverso",
        "type": "Saga",
        "duration": "6h",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Watching"
    },
    {
        "title": "Spirited",
        "type": "Movie",
        "duration": "2h 7m",
        "genre": "Comedy",
        "platform": "None",
        "status": "Watched"
    },
    {
        "title": "Star Wars",
        "type": "Saga",
        "duration": "25h",
        "genre": "Sci-Fi",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Stranger Things",
        "type": "Series",
        "duration": "34 ep",
        "genre": "Sci-Fi",
        "platform": "Netflix",
        "status": "Watching"
    },
    {
        "title": "Suegros De Armas Tomar",
        "type": "Movie",
        "duration": "1h 35m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "Super Mario Bros Movie",
        "type": "Movie",
        "duration": "1h 32m",
        "genre": "Animation",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Superbad",
        "type": "Movie",
        "duration": "1h 59m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Sweeny Todd",
        "type": "Movie",
        "duration": "1h 56m",
        "genre": "Musical",
        "platform": "Max; Prime",
        "status": "Not watched"
    },
    {
        "title": "Tales Of The Empire",
        "type": "Series",
        "duration": "6 ep",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Tales Of The Jedi",
        "type": "Series",
        "duration": "6 ep",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Taylor Swift: The Eras Tour",
        "type": "Movie",
        "duration": "2h 48m",
        "genre": "Biography",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Terminator",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "The Acolyte",
        "type": "Series",
        "duration": "8 ep",
        "genre": "Sci-Fi",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "The Bad Batch (Star Wars)",
        "type": "Series",
        "duration": "16 ep",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "The Batman",
        "type": "Movie",
        "duration": "2h 56m",
        "genre": "Action",
        "platform": "Netflix; Max; Prime",
        "status": "Watched"
    },
    {
        "title": "The Book Of Boba Fett",
        "type": "Series",
        "duration": "7 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "The Boy The Mole The Fox And The Horse",
        "type": "Movie",
        "duration": "34m",
        "genre": "Animation",
        "platform": "None",
        "status": "Watched"
    },
    {
        "title": "The Boys",
        "type": "Series",
        "duration": "32 ep",
        "genre": "Action",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "The Clone Wars",
        "type": "Series",
        "duration": "133 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "The Fablemans",
        "type": "Movie",
        "duration": "2h 31m",
        "genre": "Biography",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "The Great Gatsby (Leo Dicaprio)",
        "type": "Movie",
        "duration": "2h 23m",
        "genre": "Drama",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "The Hustle",
        "type": "Movie",
        "duration": "1h 34m",
        "genre": "Comedy",
        "platform": "Prime",
        "status": "Not watched"
    },
    {
        "title": "The Interview",
        "type": "Movie",
        "duration": "1h 52m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "The Mandalorian",
        "type": "Series",
        "duration": "24 ep",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "The Mandalorian & Grogu",
        "type": "Movie",
        "duration": "TBA",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "The Menu",
        "type": "Movie",
        "duration": "1h 46m",
        "genre": "Thriller",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "The Willoughbys",
        "type": "Movie",
        "duration": "1h 30m",
        "genre": "Animation",
        "platform": "Netflix",
        "status": "Not watched"
    },
    {
        "title": "This Is The End",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Comedy",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Thor: Love And Thunder",
        "type": "Movie",
        "duration": "1h 59m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Tiana y El Sapo",
        "type": "Movie",
        "duration": "1h 37m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Tick Tick Boom",
        "type": "Movie",
        "duration": "1h 55m",
        "genre": "Musical",
        "platform": "Netflix",
        "status": "Watched"
    },
    {
        "title": "Top Gun 1 y 2",
        "type": "Movie",
        "duration": "1h 49m",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Transformers Saga",
        "type": "Saga",
        "duration": "15h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watching"
    },
    {
        "title": "Trilogía Batman",
        "type": "Saga",
        "duration": "5h",
        "genre": "Action",
        "platform": "Max; Prime",
        "status": "Watched"
    },
    {
        "title": "Trilogía Divergente",
        "type": "Saga",
        "duration": "6h",
        "genre": "Action",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Trilogía El Corredor Del Laberinto",
        "type": "Saga",
        "duration": "6h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Trilogía El Planeta De Los Simios",
        "type": "Saga",
        "duration": "6h",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Trilogía Los Juegos Del Hambre",
        "type": "Saga",
        "duration": "6h",
        "genre": "Action",
        "platform": "Prime",
        "status": "Watched"
    },
    {
        "title": "Tron Legacy",
        "type": "Movie",
        "duration": "2h 5m",
        "genre": "Action",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Una Pareja De 3",
        "type": "Movie",
        "duration": "1h 55m",
        "genre": "Comedy",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Up",
        "type": "Movie",
        "duration": "1h 36m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Vaiana",
        "type": "Movie",
        "duration": "1h 47m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Wall E",
        "type": "Movie",
        "duration": "1h 38m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Westside Story",
        "type": "Movie",
        "duration": "2h 36m",
        "genre": "Musical",
        "platform": "Disney+",
        "status": "Not watched"
    },
    {
        "title": "Why Him",
        "type": "Movie",
        "duration": "1h 51m",
        "genre": "Comedy",
        "platform": "Netflix; Prime",
        "status": "Watched"
    },
    {
        "title": "Wish",
        "type": "Movie",
        "duration": "1h 30m",
        "genre": "Animation",
        "platform": "Disney+",
        "status": "Watched"
    },
    {
        "title": "Wonder",
        "type": "Movie",
        "duration": "1h 53m",
        "genre": "Drama",
        "platform": "Netflix; Prime",
        "status": "Not watched"
    },
    {
        "title": "Wonka",
        "type": "Movie",
        "duration": "1h 56m",
        "genre": "Musical",
        "platform": "Max; Prime",
        "status": "Watched"
    }
];

export default moviesData;
