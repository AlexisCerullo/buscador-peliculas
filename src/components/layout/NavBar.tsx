import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-indigo-950 min-h-20">
            <div className="flex sm:w-xl justify-between sm:justify-around items-center"> { /* Lado Izquierdo */ }
                <NavLink className="flex size-18" to="/">
                    <img src="../logo.png" alt="Logo del Sitio" />
                </NavLink>
                <NavLink className="hidden lg:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/">Home</NavLink>
                <NavLink className="hidden sm:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/?series">Series</NavLink>
                <NavLink className="hidden sm:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/?peliculas">Peliculas</NavLink>
                <NavLink className="hidden lg:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/?nuevos">Nuevos</NavLink>
                <NavLink className="hidden lg:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/?populares">Populares</NavLink>
            </div>

            <div className="flex w-xl gap-x-50 sm:gap-x-0 justify-around items-center"> { /* Lado Derecho */ }
                <NavLink className="hidden sm:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300" to="/?favoritos">Favoritos</NavLink>
                <NavLink className="w-10 h-10" to="/?busqueda">
                    <img src="../lupa.png" alt="Buscar" />
                </NavLink>
                <NavLink className="hidden lg:flex text-white text-2xl font-bold hover:animate-pulse text-slate-300 " to="/?perfil">-usuarioNombre-</NavLink>
                <NavLink className="text-white text-2xl font-bold hover:animate-pulse text-slate-300 " to="/?config">
                    <img src="../usuarioImagen.png" alt="Imagen del Usuario" className="w-10 h-10 rounded-full" />
                </NavLink>
            </div>

        </nav>
    )
}

export default NavBar;