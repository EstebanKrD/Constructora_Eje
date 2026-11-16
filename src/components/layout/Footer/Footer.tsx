import { Link } from 'react-router-dom'
import logoCirculo from '@/assets/marca/logo-circulo.webp'
import { Boton } from '@/components/ui/Boton'
import { FOOTER, NAVEGACION } from '@/data/navegacion'
import { SERVICIOS } from '@/data/servicios'
import { clases } from '@/utils/clases'
import estilos from './Footer.module.css'

export function Footer() {
  return (
    <footer className={estilos.footer}>
      <div className={clases('contenedor', estilos.columnas)}>
        <Link to="/" className={estilos.marca}>
          <img
            className={estilos.logo}
            src={logoCirculo}
            alt={FOOTER.altLogo}
            width={150}
            height={150}
            loading="lazy"
            decoding="async"
          />
        </Link>

        <nav aria-labelledby="pie-navegacion">
          <h2 id="pie-navegacion" className={estilos.tituloColumna}>
            {FOOTER.tituloNavegacion}
          </h2>
          <ul className={estilos.lista}>
            {NAVEGACION.map((enlace) => (
              <li key={enlace.ruta}>
                <Link to={enlace.ruta} className={estilos.enlace}>
                  {enlace.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={estilos.tituloColumna}>{FOOTER.tituloServicios}</h2>
          <ul className={estilos.lista}>
            {SERVICIOS.map((servicio) => (
              <li key={servicio.numero} className={estilos.item}>
                {servicio.titulo}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={estilos.tituloColumna}>{FOOTER.tituloContacto}</h2>
          <p className={estilos.invitacion}>{FOOTER.invitacion}</p>
          <p className={estilos.ubicacion}>{FOOTER.ubicacion}</p>
          <Boton to={FOOTER.boton.ruta} fondo="oscuro">
            {FOOTER.boton.etiqueta}
          </Boton>
        </div>
      </div>

      <div className={clases('contenedor', estilos.inferior)}>
        <div className={estilos.franja}>
          <p>{FOOTER.derechos}</p>
          <Link to={FOOTER.politica.ruta} className={estilos.enlaceInferior}>
            {FOOTER.politica.etiqueta}
          </Link>
          <p className={estilos.lema}>{FOOTER.lema}</p>
        </div>
      </div>
    </footer>
  )
}
