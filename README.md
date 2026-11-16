# Constructora del Eje · Sitio web

Sitio web de **Constructora del Eje Ingeniería y Proyectos S.A.S.** (Quindío, Colombia): diseño, construcción, estructura metálica y gerencia de proyectos con un solo responsable. Cada sección presenta la experiencia de la firma con pruebas verificables: obras, cifras, clientes, contratos, casos y socios.

## Stack

- React + TypeScript + Vite
- React Router
- CSS Modules + variables CSS globales (sin librerías de UI)
- Fuentes autoalojadas con Fontsource: Archivo (variable con eje de ancho), Public Sans e IBM Plex Mono
- Solo frontend: sin backend ni base de datos

## Comandos

```bash
npm ci            # instala las dependencias exactas del package-lock.json
npm run dev       # servidor de desarrollo
npm run lint      # revisión estática
npm run build     # compila a dist/
npm run preview   # sirve dist/ localmente
```

## Estructura de carpetas

```
src/
  main.tsx
  app/                 App.tsx, router.tsx
  assets/              marca/, obras/, clientes/
  components/
    layout/            Header, Footer, Layout, ScrollAlInicio
    ui/                Boton, EtiquetaSeccion, CampoFormulario, CampoSeleccion,
                       CampoTexto, CasillaAutorizacion, CifraDestacada
    secciones/         EncabezadoPagina, TarjetaServicio, TarjetaObra,
                       FranjaClientes, ListaRazones
  pages/
    Inicio/            components/ (Hero, CifrasHero, ServiciosResumen,
                       DisenoConstruccion, BloqueSalud, ObrasDestacadas)
    Nosotros/          components/ (Historia, LineaTiempo, Socios, FichaSocio, Presencia)
    Servicios/         components/ (Pilares, DetalleServicio)
    ComoTrabajamos/    components/ (Fases, Herramientas, Indicadores, ControlCalidad,
                       Estandares, ValorAgregado, CriteriosAsg)
    Experiencia/       components/ (FiltrosObras, CasosExito, TablaContratos)
    Contacto/          hooks/useSolicitud.ts, components/ (PasosInicio, DatosContacto,
                       FormularioSolicitud, SolicitudLista)
    PoliticaDatos/
    NoEncontrado/
  data/                textos y datos de cada página
  config/sitio.ts      datos de contacto y opciones del sitio
  types/               tipos compartidos
  utils/               validacion, mensajes, formato, clases
  styles/              tokens.css, fuentes.css, global.css
```

Convenciones:

- Cada componente vive en su carpeta con `Nombre.tsx`, `Nombre.module.css` e `index.ts` (exportaciones con nombre).
- Lo que usa una sola página va en `pages/<Pagina>/components/`; lo compartido, en `components/`.
- Todos los textos y datos están en `src/data/`; los datos de contacto, en `src/config/sitio.ts`.
- Los imports usan el alias `@/` → `src/`.

## Flujo de trabajo

- `main`: producción. `develop`: rama principal de trabajo.
- Cada tarea sale de `develop` en su propia rama (`feat/`, `fix/`, `chore/`, `docs/`, `ci/`).
- Al terminar: `npm run lint` y `npm run build` sin errores, push de la rama y Pull Request hacia `develop`.
- Los PR se aceptan en GitHub con "Create a merge commit". Las ramas no se borran.
- Commits en formato Conventional Commits, en español.
