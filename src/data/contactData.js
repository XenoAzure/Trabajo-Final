import { send } from "vite"

/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Frieren',
        contact_avatar: 'https://i.blogs.es/585f08/frieren/1200_800.jpeg',
        contact_unseen_messages: 5,
        last_message_content: 'No tenes mas libros?',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        /* Realizar el renderizado de la lista de mensajes */
        messages: [
            {
                message_id: 1,
                message_content: 'Que onda?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Todo bien?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Fern',
        contact_avatar: 'https://cdn.rafled.com/anime-icons/images/80i2sxkUjJNf4A1Ow7m3GYIDGpnKjQWi.jpg',
        contact_unseen_messages: 2,
        last_message_content: 'Stark no te llamo ni nada?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Otra vez la Frieren molestando con libros',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Que se le va a hacer',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Stark',
        contact_avatar: 'https://practicaltyping.com/wp-content/uploads/2024/05/stark.jpg',
        contact_unseen_messages: 5,
        last_message_content: 'Soy Stark, que onda',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        send_by_me: false
    },
]

export default contact_data