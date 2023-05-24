import Image1 from '../../assets/rate-my-gym.png';
import Image2 from '../../assets/lifeline.jpg';
import Image3 from '../../assets/whatsapp-png.png';
import Image4 from '../../assets/spp-png.png';

export const Data = [
    {
        id: 2,
        image: Image2,
        title: 'Lifeline',
        tags: ['Dart', 'Flutter', 'Google Maps SDK', 'Firebase'],
        description:
            'Flutter mobile app empowering individuals and communities with the ability to save lives. Functionalities include community responder crowdsourcing, and provision of quality and interactive first aid education',
        live: 'https://github.com/ackselz/Lifeline/releases/tag/v0.1.1-alpha',
        source: 'https://github.com/ackselz/Lifeline'
    },
    {
        id: 1,
        image: Image1,
        title: 'Rate My Gym',
        tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
        description:
            'Full-stack responsive CRUD web app for gym reviews implementing MVC architecture. Functionalities include RESTful routing, authentication & authorisation, client-side & server-side validation, Cloudinary and Mapbox API',
        live: 'https://rate-my-gym.herokuapp.com/',
        source: 'https://github.com/zorridge/rate-my-gym'
    },
    {
        id: 3,
        image: Image3,
        title: 'WhatsApp Auto Sender',
        tags: ['Python', 'PyAutoGui', 'Tkinter'],
        description:
            'Bulk WhatsApp messager GUI app built using PyAutoGui and Tkinter',
        live: 'https://github.com/zorridge/whatsapp-auto-sender/releases/tag/v1.0',
        source: 'https://github.com/zorridge/whatsapp-auto-sender'
    },
    {
        id: 4,
        image: Image4,
        tags: ['HTML', 'CSS', 'Bootstrap', 'Netlify'],
        title: 'ShopeePay Product Landing Page',
        description: 'Static product landing page built using Bootstrap',
        live: 'https://shopeepay-opv.netlify.app/',
        source: 'https://github.com/zorridge/shopeepay-site'
    }
];
