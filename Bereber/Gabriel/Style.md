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
