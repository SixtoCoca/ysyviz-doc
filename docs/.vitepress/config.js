export default {
  title: 'Ysyviz - Manual de Usuario',
  description: 'Manual completo de Ysyviz, herramienta de visualización de datos',
  
  // Configuración para GitHub Pages
  base: '/ysyviz-doc/', // Nombre del repositorio
  
  // Configuración del tema
  themeConfig: {
    // Logo
    logo: '/logo.png', // Opcional: puedes añadir un logo
    
    // Navegación principal
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Manual', link: '/docu/' },
      { text: 'GitHub', link: 'https://github.com/SixtoCoca/ysyviz' }
    ],
    
    // Sidebar
    sidebar: {
      '/docu/': [
        {
          text: 'Manual de Usuario',
          items: [
            { text: 'Introducción', link: '/docu/' },
            { text: 'Flujo de Trabajo', link: '/docu/workflow' },
            { text: 'Configuraciones por Tipo', link: '/docu/chart-configs' },
            { text: 'Preparación de Datos CSV', link: '/docu/csv' },
            { text: 'Exportación', link: '/docu/export' }
          ]
        }
      ]
    },
    
    // Enlaces sociales
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SixtoCoca/ysyviz' }
    ],
    
    // Footer
    footer: {
      message: 'Documentación de Ysyviz',
      copyright: 'Copyright © 2024 SixtoCoca'
    },
    
    // Búsqueda
    search: {
      provider: 'local'
    },
    
    // Configuración de la página
    outline: {
      level: [2, 3],
      label: 'En esta página'
    },
    
    // Configuración de la última actualización
    lastUpdated: {
      text: 'Última actualización',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  
  // Configuración de Markdown
  markdown: {
    lineNumbers: true,
    theme: 'github-dark'
  },
  
  // Configuración de desarrollo
  vite: {
    server: {
      port: 3000,
      open: true
    }
  }
}
