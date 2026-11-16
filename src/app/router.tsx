import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ComoTrabajamos } from '@/pages/ComoTrabajamos'
import { Contacto } from '@/pages/Contacto'
import { Experiencia } from '@/pages/Experiencia'
import { Inicio } from '@/pages/Inicio'
import { NoEncontrado } from '@/pages/NoEncontrado'
import { Nosotros } from '@/pages/Nosotros'
import { Servicios } from '@/pages/Servicios'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'como-trabajamos', element: <ComoTrabajamos /> },
      { path: 'experiencia', element: <Experiencia /> },
      { path: 'contacto', element: <Contacto /> },
      { path: '*', element: <NoEncontrado /> },
    ],
  },
])
