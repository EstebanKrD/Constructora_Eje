# Seguridad

## Alcance

Este repositorio contiene el sitio web de Constructora del Eje Ingeniería y Proyectos S.A.S. Es un **sitio estático**: después del build solo hay HTML, CSS, JavaScript, fuentes e imágenes.

- **Sin backend ni base de datos**: no hay servidor de aplicación, consultas SQL ni almacenamiento de datos, así que no existe superficie de inyección SQL.
- **Sin cuentas ni sesiones**: no hay inicio de sesión, cookies propias ni datos de usuarios guardados.
- **Formulario de contacto**: los datos solo viven en la memoria de la página mientras se escriben. El sitio arma un mensaje que la persona envía por WhatsApp o por su correo; no se guardan en el navegador (`localStorage`/`sessionStorage`), en la URL ni en la consola.

## Capas contra XSS

1. **React escapa todo el texto** que se muestra; el código no usa `dangerouslySetInnerHTML`, `innerHTML`, `eval`, `new Function` ni `document.write`.
2. **Validación con listas blancas**: cada campo del formulario acepta solo los caracteres permitidos, se recorta y tiene longitud máxima. La descripción elimina `< > { }` y los caracteres de control. El filtro de obras (`?categoria=`) solo acepta valores de una lista.
3. **Codificación**: todo texto del usuario que va en un enlace (WhatsApp o correo) pasa por `encodeURIComponent`.
4. **Content-Security-Policy estricta**: `script-src 'self'` y `style-src 'self'` sin `unsafe-inline`, así que un script o estilo inyectado no se ejecuta. Además `object-src 'none'`, `base-uri 'self'`, `form-action 'self'` y `frame-ancestors 'none'`.
5. **Enlaces externos** con `target="_blank"` y `rel="noopener noreferrer"`.

## Cabeceras

Las mismas 8 cabeceras se declaran en `public/_headers` (Cloudflare Pages) y en `public/.htaccess` (Apache/LiteSpeed). `npm run verificar:cabeceras` comprueba en el CI que coincidan: Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy y Cross-Origin-Resource-Policy.

## Protecciones del `.htaccess`

- Redirección a HTTPS (301), también detrás de un proxy que envía `X-Forwarded-Proto`.
- Sin listado de directorios y sin firma del servidor en las páginas de error; se quita `X-Powered-By`.
- Solo `GET` y `HEAD`; cualquier otro método responde 405.
- Rutas ocultas (`.git`, `.env`, `.htaccess`…) responden 403, salvo `/.well-known/`.
- Extensiones `.map .ts .tsx .md .lock .log .bak .sql .ini .sh` responden 403.
- Patrones de ataque conocidos en la query string (`<script`, `union select`, `../`, `base64_`, `%00`, `GLOBALS`, `_REQUEST`) responden 403.
- Caché inmutable para `/assets/` y `index.html` sin caché.

## Dependencias y build

- Dependencias a versión exacta (`.npmrc` con `save-exact=true`) e instalación con `npm ci`.
- El CI ejecuta lint, build, verificación de cabeceras y `npm audit --audit-level=high` en cada PR.
- Dependabot revisa cada semana las dependencias de npm y las GitHub Actions.
- Build sin sourcemaps; fuentes autoalojadas y nada cargado desde CDNs externos.
- Sin secretos ni archivos `.env` en el repositorio.

## DDoS

Al ser estático, el sitio no tiene procesos costosos que un atacante pueda saturar. La mitigación de ataques de volumen depende del hosting: en `docs/DESPLIEGUE.md` se detalla qué pedirle al proveedor y cómo usar Cloudflare como proxy gratuito.

## Cómo reportar una vulnerabilidad

No abras un issue público. Usa una de estas vías:

1. **Aviso de seguridad privado en GitHub**: https://github.com/EstebanKrD/Constructora_Eje/security/advisories/new
2. El contacto publicado en `/.well-known/security.txt` del sitio.

Incluye la URL afectada, los pasos para reproducirlo y el impacto. Recibirás una respuesta en cuanto se revise el reporte.
