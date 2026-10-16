# A.M Servicios Eléctricos

Sitio web para una empresa de instalaciones eléctricas: presenta los servicios para
hogares, comercios e industrias, muestra trabajos realizados y la zona de cobertura,
y permite pedir presupuesto directamente por WhatsApp.

Construido con Vite, JavaScript y CSS (sin frameworks).

## Ver el sitio

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

Cada push a `main` se compila y publica automáticamente en GitHub Pages
(ver [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

## Estructura

```
index.html           Documento base de Vite
src/main.js          Contenido de la página e interacciones (pestañas, menú, formulario)
src/style.css        Estilos, variables de color, layout y responsive
public/img/          Logo e ilustraciones de los servicios
```

## Pendiente antes de finalizar

- Reemplazar los datos de contacto de prueba por los definitivos
- Agregar las fotos reales de trabajos (bloques "Foto próximamente")
