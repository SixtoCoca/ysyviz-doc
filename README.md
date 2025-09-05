# Ysyviz - Documentación

Este repositorio contiene la documentación de **Ysyviz**, una herramienta de visualización de datos diseñada para usuarios sin conocimientos de programación.

## 🚀 Despliegue en GitHub Pages

Esta documentación está configurada para desplegarse automáticamente en GitHub Pages usando VitePress.

### Configuración Inicial

1. **Fork o clona este repositorio**
2. **Cambia el nombre del repositorio** (opcional, pero recomendado):
   - Ve a Settings → General → Repository name
   - Cambia el nombre a algo como `ysyviz-docs`

3. **Actualiza la configuración base**:
   - Edita `docs/.vitepress/config.js`
   - Cambia la línea `base: '/ysyviz-docs/'` por el nombre de tu repositorio
   - Si tu repositorio se llama `mi-docs`, cambia a `base: '/mi-docs/'`

4. **Habilita GitHub Pages**:
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"
   - Guarda los cambios

### Despliegue Automático

Una vez configurado, el sitio se desplegará automáticamente cada vez que hagas push a la rama `main`. El workflow de GitHub Actions:

1. Instala las dependencias
2. Construye el sitio con VitePress
3. Despliega a GitHub Pages

### Desarrollo Local

Para desarrollar localmente:

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Estructura del Proyecto

```
docs/
├── .vitepress/
│   ├── config.js          # Configuración de VitePress
│   └── public/            # Archivos estáticos (imágenes, etc.)
├── docu/                  # Documentación principal
│   ├── index.md          # Página principal del manual
│   ├── workflow.md       # Flujo de trabajo
│   ├── chart-configs.md  # Configuraciones por tipo
│   ├── csv.md           # Preparación de datos
│   └── export.md        # Exportación
└── index.md             # Página de inicio
```

### Personalización

#### Cambiar el Tema
Edita `docs/.vitepress/config.js` para personalizar:
- Colores y logo
- Navegación y sidebar
- Enlaces sociales
- Configuración de búsqueda

#### Añadir Contenido
- Añade nuevos archivos `.md` en `docs/docu/`
- Actualiza el sidebar en `config.js`
- Las imágenes van en `docs/.vitepress/public/`

#### Configuración de GitHub Pages
- **URL del sitio**: `https://tu-usuario.github.io/nombre-del-repo/`
- **Dominio personalizado**: Configura en Settings → Pages → Custom domain

### Comandos Útiles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run docs:dev         # Alias para desarrollo

# Producción
npm run build            # Construir sitio
npm run docs:build       # Alias para build
npm run preview          # Previsualizar build

# Limpieza
rm -rf docs/.vitepress/dist  # Limpiar build anterior
```

### Solución de Problemas

#### El sitio no se despliega
1. Verifica que GitHub Pages esté habilitado
2. Revisa los logs de GitHub Actions
3. Asegúrate de que el `base` en `config.js` coincida con el nombre del repo

#### Las imágenes no se muestran
1. Verifica que las imágenes estén en `docs/.vitepress/public/`
2. Usa rutas absolutas: `/imagen.png` en lugar de `../imagen.png`

#### Errores de build
1. Ejecuta `npm run build` localmente para ver errores
2. Verifica la sintaxis de los archivos Markdown
3. Revisa que todas las rutas sean correctas

### Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature: `git checkout -b mi-feature`
3. Haz commit de tus cambios: `git commit -m 'Añadir nueva sección'`
4. Push a la rama: `git push origin mi-feature`
5. Abre un Pull Request

### Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Ysyviz** - Visualización de datos para todos 🎯📊
