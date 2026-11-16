import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { clases } from '@/utils/clases'
import estilos from './Boton.module.css'

export type VarianteBoton = 'principal' | 'secundarioOscuro' | 'enlace'

interface PropsBase {
  variante?: VarianteBoton
  /** Fondo sobre el que se ubica el botón; cambia el hover y el color del enlace. */
  fondo?: 'claro' | 'oscuro'
  className?: string
  children: ReactNode
}

type PropsLink = PropsBase & Omit<LinkProps, 'className' | 'children'> & { href?: never }

type PropsEnlaceExterno = PropsBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'target' | 'rel'> & {
    href: string
    to?: never
  }

type PropsBoton = PropsBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: never
    href?: never
  }

export type BotonProps = PropsLink | PropsEnlaceExterno | PropsBoton

export function Boton(props: BotonProps) {
  const { variante = 'principal', fondo = 'claro', className, children } = props
  const clase = clases(
    estilos.boton,
    estilos[variante],
    fondo === 'oscuro' && estilos.sobreOscuro,
    className,
  )

  if ('to' in props && props.to !== undefined) {
    const { variante: _v, fondo: _f, className: _c, children: _h, ...resto } = props
    return (
      <Link {...resto} className={clase}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const { variante: _v, fondo: _f, className: _c, children: _h, ...resto } = props
    return (
      <a {...resto} className={clase} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  const { variante: _v, fondo: _f, className: _c, children: _h, type = 'button', ...resto } =
    props as PropsBoton
  return (
    <button {...resto} type={type} className={clase}>
      {children}
    </button>
  )
}
