# Despliegue

El sitio es estático: después del build solo hay HTML, CSS, JavaScript, fuentes e imágenes. No necesita base de datos, PHP ni Node.js en el servidor.

## 1. Build

```bash
npm ci
npm run build
npm run verificar:cabeceras
```

Se sube **solo el contenido de `dist/`** (no la carpeta del proyecto). `dist/` ya incluye:

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` y `assets/` | El sitio |
| `.htaccess` | Reglas y cabeceras para Apache o LiteSpeed (cPanel) |
| `_headers` | Cabeceras para Cloudflare Pages |
| `.well-known/security.txt` | Contacto para reportar vulnerabilidades |

Antes de publicar, completa `src/config/sitio.ts` (WhatsApp, correo, teléfono, dirección, NIT, canal y dominio) y vuelve a hacer el build.

## 2. Opción A: hosting con cPanel (Apache o LiteSpeed)

1. **Activa el SSL antes de subir** (cPanel → SSL/TLS Status → AutoSSL, o el certificado del hosting). El `.htaccess` redirige todo a HTTPS; sin certificado el sitio no abriría.
2. Abre el Administrador de archivos y entra a `public_html/`.
3. En Configuración, marca **Mostrar archivos ocultos (dotfiles)**; si no, `.htaccess` y `.well-known/` no se ven ni se suben.
4. Sube el contenido de `dist/` (o un `.zip` de ese contenido y extráelo ahí). La raíz de `public_html/` debe quedar con `index.html`, `.htaccess`, `assets/`, etc.
5. Comprueba que el hosting tenga `mod_rewrite`, `mod_headers` y `mod_deflate` (lo normal en cPanel). Si alguno falta, el bloque correspondiente del `.htaccess` simplemente no se aplica.
6. El `.htaccess` no puede ocultar la versión del servidor en la cabecera `Server`; pídele al hosting `ServerTokens Prod` si es posible.

## 3. Opción B: servidor propio con Nginx

Copia el contenido de `dist/` a `/var/www/constructora-del-eje` y usa un bloque equivalente al `.htaccess` (reemplaza `DOMINIO` y las rutas del certificado):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name DOMINIO www.DOMINIO;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name DOMINIO www.DOMINIO;

    ssl_certificate     /etc/letsencrypt/live/DOMINIO/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/DOMINIO/privkey.pem;

    root /var/www/constructora-del-eje;
    index index.html;
    server_tokens off;
    autoindex off;

    # Las mismas 8 cabeceras de public/_headers y public/.htaccess
    add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()" always;
    add_header Cross-Origin-Opener-Policy "same-origin" always;
    add_header Cross-Origin-Resource-Policy "same-origin" always;

    # Solo GET y HEAD
    if ($request_method !~ ^(GET|HEAD)$) { return 405; }

    # Patrones de ataque en la query string
    if ($query_string ~* "(<|%3C)\s*script|union(\s|\+|%20)+(all(\s|\+|%20)+)?select|(\.\.|%2e%2e)(/|%2f|\\|%5c)|base64_|%00|GLOBALS(=|\[|%[0-9A-Z]{0,2})|_REQUEST(=|\[|%[0-9A-Z]{0,2})") {
        return 403;
    }

    # Rutas ocultas (salvo /.well-known/) y extensiones sensibles
    location ~ /\.(?!well-known/) { return 403; }
    location ~* \.(map|ts|tsx|md|lock|log|bak|sql|ini|sh)$ { return 403; }

    # Recursos con hash: caché inmutable de un año; si no existen, 404
    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable" always;
        # add_header dentro de location reemplaza los del server: se repiten aquí
        add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-Frame-Options "DENY" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()" always;
        add_header Cross-Origin-Opener-Policy "same-origin" always;
        add_header Cross-Origin-Resource-Policy "same-origin" always;
        try_files $uri =404;
    }

    # SPA: toda ruta que no sea un archivo carga index.html (sin caché)
    location / {
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        add_header Cache-Control "no-cache" always;
        add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-Frame-Options "DENY" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()" always;
        add_header Cross-Origin-Opener-Policy "same-origin" always;
        add_header Cross-Origin-Resource-Policy "same-origin" always;
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

Después: `sudo nginx -t && sudo systemctl reload nginx`.

## 4. Opción C: Cloudflare Pages

1. Crea el proyecto en Cloudflare Pages conectado al repositorio de GitHub (rama `main`).
2. Configuración de build: comando `npm run build`, carpeta de salida `dist`.
3. Cloudflare Pages lee `dist/_headers` (cabeceras) y sirve la SPA sin configuración extra: las rutas que no existen como archivo cargan `index.html`.
4. El `.htaccess` se ignora en Cloudflare Pages (no hace daño).
5. Añade el dominio en Pages → Custom domains; el certificado HTTPS es automático.

## 5. Dominio

- Registra el dominio **a nombre de Constructora del Eje Ingeniería y Proyectos S.A.S.**, con un correo de la empresa como contacto, no a nombre de una persona o de quien hizo el sitio.
- Activa la renovación automática y el bloqueo de transferencia.
- Guarda las credenciales del registrador en un lugar de la empresa.

## 6. Protección contra DDoS

- **Hosting compartido o cPanel**: pregunta si incluye mitigación de DDoS en la red, limitación de solicitudes (rate limiting) y firewall de aplicaciones (WAF, por ejemplo ModSecurity o Imunify360), y si tiene copias de seguridad diarias.
- **Cloudflare como proxy gratuito** (sirve con cualquier hosting): cambia los DNS del dominio a Cloudflare, deja el registro del sitio con la nube naranja (proxy) y activa SSL «Full (strict)». El plan gratuito incluye mitigación de DDoS, caché en el borde y reglas básicas de WAF. Con Cloudflare delante, el `.htaccess` ya contempla la cabecera `X-Forwarded-Proto` para no crear redirecciones en bucle.
- **Cloudflare Pages**: la protección de Cloudflare viene incluida.

## 7. Verificación después de publicar

| Prueba | Resultado esperado |
| --- | --- |
| https://securityheaders.com con el dominio | Las 8 cabeceras presentes (calificación A o superior) |
| https://www.ssllabs.com/ssltest/ con el dominio | Calificación A o superior |
| `http://DOMINIO/` | Redirección 301 a `https://` |
| `https://DOMINIO/.git/config` | 403 o 404 |
| `https://DOMINIO/.env` | 403 o 404 |
| `curl -X POST https://DOMINIO/` | 405 (en Cloudflare Pages puede ser 405 o 404) |
| Recargar `https://DOMINIO/experiencia` | 200 con el sitio (no un 404 del servidor) |
| `https://DOMINIO/.well-known/security.txt` | 200 con el contacto |
| Consola del navegador en cada página | Sin errores de Content-Security-Policy |

## 8. Datos que se actualizan después

- **`src/config/sitio.ts`**: WhatsApp (`whatsappNumero`, hoy `null`), correo, teléfono, dirección, NIT, canal y dominio. Requiere un nuevo build.
- **`public/.well-known/security.txt`**: renovar `Expires` antes de que venza (un año) y descomentar `Canonical` con el dominio real.
- **`src/data/politica.ts`**: fecha de publicación de la política de datos, después de la revisión legal.
