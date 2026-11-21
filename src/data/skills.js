// Íconos nuevos desde Devicon (CDN); los anteriores siguen en assets/images
const devicon = (name) => `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${name}/${name}-original.svg`
const img = (file) => `assets/images/${file}`

export const columnas = [
  [
    {
      titulo: 'IA y Datos',
      items: [
        ['PyTorch', devicon('pytorch')],
        ['Pandas', devicon('pandas')],
        ['scikit-learn', devicon('scikitlearn')],
        ['Jupyter', devicon('jupyter')],
      ],
    },
    {
      titulo: 'Frontend',
      items: [
        ['HTML', img('html-5Logo2.png')],
        ['CSS', img('cssLogo.png')],
        ['JavaScript', img('JavaScript-logo.png')],
        ['TypeScript', devicon('typescript')],
        ['React', img('ReactLogo2.png')],
        ['Vue.js', img('VueLogo2.png')],
      ],
    },
    {
      titulo: 'Backend',
      items: [
        ['Python', img('PythonLogo.png')],
        ['FastAPI', devicon('fastapi')],
        ['JavaC', img('JavaCLogo2.png')],
        ['.Net', img('NetLogo.png')],
      ],
    },
  ],
  [
    {
      titulo: 'Base de Datos',
      items: [['PostgreSQL', img('PostgresLogo.png')]],
    },
    {
      titulo: 'Control de versiones y despliegue',
      items: [
        ['Git', img('GitLogo.png')],
        ['Docker', devicon('docker')],
      ],
    },
    {
      titulo: 'Otras',
      items: [
        ['Kotlin', img('KotlinLogo2.png')],
        ['Android Studio', img('AndroidStudioLogo.png')],
      ],
    },
    {
      titulo: 'Diseño',
      items: [['Figma', img('Figma-logo.png')]],
    },
  ],
]
