const usuarios = [
    {
        id: 1,
        codigo: "USR-001",
        usuario: "jmartel",
        password: "1234",
        role: "admin",
        infoPersonal: {
            nombre: "Julio",
            apellido: "Martel",
            edad: 25,
            email: "julio.martel@email.com",
            telefono: "+54 341 555 1234",
            direccion: "Rosario, Santa Fe",
            fechaNacimiento: "1999-05-12"
        }
    },
    {
        id: 2,
        codigo: "USR-002",
        usuario: "takahashi",
        password: "abcd",
        role: "user",
        infoPersonal: {
            nombre: "Haruto",
            apellido: "Takahashi",
            edad: 30,
            email: "haruto.t@example.jp",
            telefono: "+81 90 1234 5678",
            direccion: "Tokyo, Japan",
            fechaNacimiento: "1994-08-21"
        }
    },
    {
        id: 3,
        codigo: "USR-003",
        usuario: "suzuki",
        password: "pass123",
        role: "moderator",
        infoPersonal: {
            nombre: "Yuki",
            apellido: "Suzuki",
            edad: 28,
            email: "yuki.s@example.jp",
            telefono: "+81 80 9876 5432",
            direccion: "Osaka, Japan",
            fechaNacimiento: "1996-02-10"
        }
    }
];

module.exports = usuarios;