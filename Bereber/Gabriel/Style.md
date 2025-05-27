* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #5c4a2e;
    background-color: #fff9e6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

h1, h2, h3 {
    color: #8b5a00;
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
    text-align: center;
}

h3 {
    font-size: 1.3rem;
}

p {
    margin-bottom: 15px;
}

a {
    text-decoration: none;
    color: #b87300;
}

a:hover {
    color: #8b5a00;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

section {
    padding: 50px 0;
}

header {
    background-color: white;
    padding: 15px 0;
    border-bottom: 1px solid #f0e0c0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

.logo span {
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 10px;
    color: #8b5a00;
}

nav ul {
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

.boton-comprar {
    background-color: #b87300;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: bold;
}

.boton-comprar:hover {
    background-color: #8b5a00;
    color: white;
}

.hero {
    background-color: #b87300;
    color: white;
    padding: 80px 0;
    text-align: center;
}

.hero h1, .hero p {
    color: white;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.botones {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.boton {
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    display: inline-block;
}

.boton-claro {
    background-color: white;
    color: #8b5a00;
}

.boton-oscuro {
    background-color: #8b5a00;
    color: white;
}

.boton-borde {
    background-color: transparent;
    border: 2px solid white;
    color: white;
}

.destacados {
    background-color: white;
}

.tarjetas {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
}

.tarjeta {
    background-color: #fff9e6;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
}

.icono {
    font-size: 2rem;
    margin-bottom: 15px;
}

.productos {
    background-color: #fff9e6;
}

.tarjetas-productos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
}

.producto {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 250px;
}

.producto img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: #f0e0c0;
}

.producto h3, .producto p {
    padding: 0 15px;
}

.precio-boton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.precio {
    font-weight: bold;
    color: #8b5a00;
}

.boton-anadir {
    background-color: #b87300;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.centrado {
    text-align: center;
    margin-top: 40px;
}

.educacion {
    background-color: white;
}

.dos-columnas {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
}

.columna {
    flex: 1;
    min-width: 300px;
}

.columna img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    background-color: #f0e0c0;
}

.columna ul {
    margin-bottom: 20px;
}

.columna ul li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.columna ul li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #b87300;
}

.eventos {
    background-color: #fff9e6;
}

.tarjetas-eventos {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
}

.evento {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    position: relative;
}

.evento img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: #f0e0c0;
}

.fecha {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #b87300;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
}

.evento h3, .evento p, .evento .ubicacion {
    padding: 0 15px;
}

.evento h3 {
    margin-top: 15px;
}

.ubicacion {
    display: flex;
    align-items: center;
    margin: 15px 0;
    font-size: 0.9rem;
    color: #5c4a2e;
}

.ubicacion:before {
    content: "📍";
    margin-right: 5px;
}


.newsletter {
    background-color: #8b5a00;
    color: white;
    text-align: center;
}

.newsletter h2 {
    color: white;
}

.newsletter form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.newsletter input {
    padding: 12px 20px;
    border-radius: 25px;
    border: none;
    width: 300px;
    max-width: 100%;
}

footer {
    background-color: #5c4a2e;
    color: #f0e0c0;
    padding: 50px 0 20px;
}

.columnas-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
}

.columna-footer {
    flex: 1;
    min-width: 200px;
}

.logo-footer {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.logo-footer span {
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 10px;
    color: white;
}

.redes-sociales {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.redes-sociales a {
    color: #f0e0c0;
}

.columna-footer h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.columna-footer ul li {
    margin-bottom: 8px;
}

.columna-footer ul li a {
    color: #f0e0c0;
}

.contacto li {
    margin-bottom: 10px;
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #8b5a00;
    font-size: 0.9rem;
}

        /*responsive*/
@media (min-width: 1024px) {
    .container {
        width: 80%;
    }
    
    .menu-movil {
        display: none;
    }
    
    nav {
        display: block;
    }
    
    .tarjetas {
        flex-wrap: nowrap;
    }
    
    .tarjetas-productos {
        justify-content: space-between;
    }
    
    .dos-columnas {
        flex-wrap: nowrap;
    }
    
    .tarjetas-eventos {
        flex-wrap: nowrap;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.8rem;
    }
    
    .menu-movil {
        display: block;
    }
    
    nav {
        display: none;
    }
    
    .tarjetas {
        justify-content: center;
    }
    
    .tarjeta {
        width: 45%;
        min-width: 250px;
    }
    
    .producto {
        width: 45%;
        min-width: 200px;
    }
    
    .dos-columnas {
        flex-direction: column;
    }
    
    .columna {
        width: 100%;
    }
    
    .evento {
        width: 45%;
        min-width: 250px;
    }
    
    .columnas-footer {
        justify-content: space-between;
    }
    
    .columna-footer {
        width: 45%;
        min-width: 200px;
    }
}


@media (max-width: 767px) {
    h1 {
        font-size: 1.8rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    .container {
        width: 95%;
    }
    
    .menu-movil {
        display: block;
    }
    
    nav {
        display: none;
    }
    
    .hero {
        padding: 50px 0;
    }
    
    .botones {
        flex-direction: column;
        align-items: center;
    }
    
    .boton {
        width: 80%;
    }
    
    .tarjeta {
        width: 100%;
    }
    
    .producto {
        width: 100%;
    }
    
    .dos-columnas {
        flex-direction: column;
    }
    
    .columna img {
        height: 250px;
    }
    
    .evento {
        width: 100%;
    }
    
    .newsletter form {
        flex-direction: column;
        align-items: center;
    }
    
    .newsletter input, 
    .newsletter .boton {
        width: 90%;
    }
    
    .columna-footer {
        width: 100%;
        margin-bottom: 30px;
    }
    
    .columnas-footer {
        flex-direction: column;
        gap: 0;
    }
}
