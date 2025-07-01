import { Link } from "gatsby"
import React from "react"

import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>
              <p className="text-black opacity-70 text-sm mt-5 ">
                En MecaEdge Studio ayudamos a empresas, diseñadores e industrias <br></br> a transformar ideas en productos concretos.
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. Todos los derechos reservados.
                </span>
              </p>
              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Meca Edge Studio
                  </a>

                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://rominicky.github.io/mecaedgestudio/"
                  >
              
                  </a>
                  <a
                    href="https://github.com/rominicky/mecaedgestudio"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Github-Logo.png"
                      alt="GitHub"
                    ></img>
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Acerca de</Link>
                </li>
                <li>
                  <Link to="/gallery">Galería</Link>
                </li>{" "}
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
