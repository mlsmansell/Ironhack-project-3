const mongoose = require('mongoose');
const Artist = require('../models/artist.model');
const User = require('../models/user.model');

const dbtitle = 'artistas';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Artist.collection.drop()
User.collection.drop()

const artists = [
    {
        name: 'Y la Bamba',
        genre: 'pop',
        imageUrl: 'https://mallorcalivefestival.com/wp-content/uploads/2019/11/YlaBamba_600x600.jpg',
        description: 'Y La Bamba is a Latin indie alternative/experimental band led by singer-songwriter and guitarist Luz Elena Mendoza. She is a first generation Mexican American, and sings in both English and Spanish. In the 11 years that Luz Elena Mendoza has been making music as Y La Bamba, there have been a few constants. Spirituality, identity, and the blessings and burdens of familial legacy have always shaped her songs. And there are the breathtaking harmonies, which color the upper reaches of her music like starlings in the sky. But otherwise, Y La Bamba—sometimes a solo project, sometimes a group with shifting membership—has entailed a gradual process of reinvention.',
        recommendedAlbum: 'Ojos del sol'

    },
    {
        name: 'Patti Smith',
        genre: 'punk',
        imageUrl: 'https://img.discogs.com/ujgTsKn8ZvY90YS4T0SH6PkB5k8=/600x909/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-193816-1511867903-4446.jpeg.jpg',
        description: 'Patricia Lee "Patti" Smith (Chicago, December 30, 1946) is an American singer and poet. Smith rose to fame during the punk movement with her debut album Horses (1975). Nicknamed "the godmother of punk", she brought a feminist and intellectual point of view to punk music and became one of the most influential artists in rock music, integrating it with a style of beat poetry.Her lyrics introduced 19th century French poetry to American youth, while her androgynous and "tomboyish" image defied the disco era.',
        recommendedAlbum: 'Horses'

    },
    {
        name: 'PJ Harvey',
        genre: 'rock',
        imageUrl: 'https://www.mondosonoro.com/wp-content/uploads/2019/04/pj-harvey-maria-mochnacz.jpg',
        description: 'La Polly Jean Harvey was born on October 9, 1969 is an English singer-songwriter. In the explosion of alternative rock bands in the early 90s, there were many female figures, singers and songwriters, who gained great notoriety. Among them was PJ Harvey, with her raw, direct and visceral rock. With her first albums, she proved to be one of the most influential songwriters of the 1990s, with lyrics that explore themes such as sex, love, religion, black humor, and femininity.',
        recommendedAlbum: 'White Chalk'

    },
    {
        name: 'Tom Waits',
        genre: 'blues',
        imageUrl: 'https://tranvias.uy/media/zoo/images/tom-waits-4_a9a93fba91ead7086dccac233881eb29.jpg',
        description: 'Thomas Alan Waits (California, December 7, 1949), better known as Tom Waits, is an American musician, singer, songwriter, and actor, famous for his harsh-pitched songs, inspired by writers such as Charles Bukowski and some of the beat generation. Waits has a distinctive voice, described by music critic Daniel Durchholz as if Waits had been dunked in a bourbon tank, smoked for a few months, and then carried outside and crushed by a car.',
        recommendedAlbum: 'Rain Dogs'

    },
    {
        name: 'Radiohead',
        genre: 'rock',
        imageUrl: 'https://static.stereogum.com/uploads/2016/10/radiohead-synths-1475513711-640x481.png',
        description: 'One of the key bands of the late 90s and early 21st century due to its suggestive capacity for experimental composition that draws on sound sources such as Pink Floyd, REM, Joy Division, Smiths or Nirvana. Radiohead maintains an independent essence that avoids trivial commerciality, originating unique developments and textures within the classic pop structure and a lyrical inventiveness to create depressing, taciturn and distressing atmospheres, in narratives distinguished by the emotional vocality of their leader Thom Yorke.',
        recommendedAlbum: 'Kid A'

    },
    {
        name: 'Ibeyi',
        genre: 'soul',
        imageUrl: 'https://silencio.com.ar/wp-content/uploads/2018/02/ibeyi-1-amber-mahoney-20000.jpg',
        description: 'Ibeyi is the project of two sisters from Cuba and France, Lisa-Kaindé and Naomi Díaz. The name of the group means Twins in the Yoruba language. They are the daughters of the famous Cuban percussionist Miguel Angá Díaz. Influenced by Cuban and French cultures Ibeyi is considered a cult group.',
        recommendedAlbum: 'Ash'

    },
]

Artist
    .create(artists)
    .then(allArtistsCreated => {
        console.log(`Created ${allArtistsCreated.length} artists`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))




const users = [
    {
        name: "administrador",
        username: "Admin",
        password: "admin",
        role: "admin",
    }
]

User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))
