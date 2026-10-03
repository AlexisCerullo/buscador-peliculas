import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-indigo-950 min-h-20">
            <div className="flex space-x-4 w-xl justify-around items-center"> { /* Lado Izquierdo */}
                <NavLink className="flex size-18" to="/">
                    <img src="../logo.png" alt="Logo del Sitio" />
                </NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/">Home</NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?series">Series</NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?peliculas">Peliculas</NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?nuevos">Nuevos</NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?populares">Populares</NavLink>
            </div>

            <div className="flex space-x-4 w-xl justify-around items-center"> { /* Lado Derecho */}
                <NavLink className="text-white text-2xl font-bold" to="/?favoritos">Favoritos</NavLink>
                <NavLink className="w-10 h-10" to="/?busqueda">
                    <img src="../lupa.png" alt="Buscar" />
                </NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?perfil">-usuarioNombre-</NavLink>
                <NavLink className="text-white text-2xl font-bold" to="/?config">
                    <img src="../usuarioImagen.png" alt="Imagen del Usuario" className="w-10 h-10 rounded-full" />
                </NavLink>
            </div>

        </nav>
    )
}

export default NavBar;