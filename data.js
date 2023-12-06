
let products = [
    {
        id: 1,
        title: 'Chat GPT vs Google Bard, La Guerra de las IA (Google vs Microsoft)',
        channel: 'Coder',
        image: "https://www.opendrive.com/s/MjdfMjIzNzYyMzhfOTdDbHU?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMDZfRzJKRW0?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '122.000 visualizaciones',
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 2,
        title: 'Resumen del cometa verde, visible en el cielo nocturno por primera vez desde',
        channel: 'CNN',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMTFfVkg2MVA?preview=1',
        view: '35.000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzYzNzhfTk5ENEI?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '2:30',
        subscriptions:'1200.00'
    },
    {
        id: 3,
        title: 'NAKAMURA a por la REVANCHA contra CARLSEN | Airthings Master Champions Chess',
        channel: 'Chess 24',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMTBfSXk5Qjg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '300.000 visualizaciones',
        image: "https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzY1MjFfbmJpaVc?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1",
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 4,
        title: 'Java Programming for Beginners - Full Course',
        channel: 'Free Code Camp',
        imagechannel: 'https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMTRfSEN5WVc?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1',
        view: '150.000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzY1NjdfNGFSUWI?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '2:00:00',
        subscriptions:'1200.00'
    },
    {
        id: 5,
        title: 'MACHU PICCHU AL DESCUBIERTO - NATIONAL GEOGRAPHIC',
        channel: 'National Geographic',
        imagechannel: 'https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMTNfY3RFZ1E?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1',
        view: '200.000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzY2MTlfem5xc1M?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 6,
        title: 'Intro animada de página Web. Puro HTML & CSS. Animación con @keyframes.',
        channel: 'Coder',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMDZfRzJKRW0?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '6000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzY2NDZfS3lMRGg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 7,
        title: 'Joel Osteen en Cala, de CNN en Español',
        channel: 'CNN',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMTFfVkg2MVA?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '302.000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzY3MjhfQUJPTVY?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 8,
        title: '3 Rules That Will Change YOUR Chess Forever! [Expert SECRETS & TIPS]',
        channel: 'Chess 24 en Español',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMTBfSXk5Qjg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '302.000 visualizaciones',
        image: "https://www.opendrive.com/s/MjdfMjIzNzY3NTBfeUl2eVc?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw",
        time: '15:00',
        subscriptions:'1200.00'
    },
    {
        id: 9,
        title: 'Lógica de Programación 👩- Aprende a programar en 10 minutos',
        channel: 'Coder',
        imagechannel: 'https://www.opendrive.com/s/MjdfMjIzNzUwMDZfRzJKRW0?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw',
        view: '112.000 visualizaciones',
        image: "https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzY3NTRfVUo2THg?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1",
        time: '15:00',
        subscriptions:'1200.00'
    },
];

let cart = [];

const getProducts = () => products;

const addToCart = (product) => {
    cart.push(product);
};

const getCart = () => {
    return cart;
};

module.exports = {
    getProducts,
    addToCart,
    getCart,
};