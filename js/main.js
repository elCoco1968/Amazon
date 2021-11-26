const btnDepartamentos = document.getElementById('btn-departamentos'),
    btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
    grid = document.getElementById('grid'),
    contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
    conenedorSubCategorias = document.querySelector('#grid .subcategorias')
    esDispositivoMovil = () => window.innerWidth <= 800;


// cuando el click este encima del boton
btnDepartamentos.addEventListener('mouseover', () => {
    if (!esDispositivoMovil()) {
        grid.classList.add('activo')
    }
});

//cuando el click salga del menu
grid.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('activo')
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if (!esDispositivoMovil()) {
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo');
                }
            })
        }
    });
});


//Evenets para dispositivos moviles
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if (contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible'
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden'
    }

});

//Click en boton de todos los departamentos (version movil)
btnDepartamentos.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

//boton regresar menu categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if (esDispositivoMovil()) {
            conenedorSubCategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo');
                }
            })
        }

    });
});

//boton regresar mene subcategoria
document.querySelectorAll('#grid .subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        conenedorSubCategorias.classList.remove('activo');
    });
});

btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) =>{
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';

})