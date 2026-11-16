import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Inicio } from '@/pages/Inicio'
import { Nosotros } from '@/pages/Nosotros'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'nosotros', element: <Nosotros /> },
    ],
  },
])
