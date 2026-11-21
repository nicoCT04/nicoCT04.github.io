// Para agregar un proyecto: agrega una entrada aquí y su imagen en public/assets/images/projects/.
// tipo → clase del badge (.project-type.<tipo>) definida en public/css/style2.css

const gh = (repo) => `https://github.com/nicoCT04/${repo}`
const img = (file) => `assets/images/projects/${file}`

export const proyectos = [
  {
    titulo: 'Bitácora de Zafra',
    tipo: 'deeplearning',
    etiqueta: 'LLM · Bot de Telegram',
    imagen: img('zafra-demo.png'),
    descripcion:
      'Bot de Telegram para un ingenio azucarero: el caporal manda una nota informal o un audio y el sistema la convierte en un reporte estructurado con alertas. Detecta caña quemada que espera ser molida, paros y accidentes, y estima el azúcar que se pierde por hora. Usa recuperación few-shot con embeddings, salida JSON validada y reglas deterministas para los cálculos.',
    tech: ['Python', 'Gemini', 'Telegram', 'Embeddings', 'Pydantic', 'SQLite'],
    repo: gh('Proyecto3-LLMS'),
    equipo: 'Con Esteban Cárcamo',
  },
  {
    titulo: 'SeñaBusca — diccionario de lengua de señas',
    tipo: 'deeplearning',
    etiqueta: 'Deep Learning',
    imagen: img('senabusca.png'),
    descripcion:
      'Haces una seña de ASL frente a la cámara y la app te muestra las 3 coincidencias más probables con su significado en español. Modelo propio sobre puntos clave de MediaPipe: de un LSTM a un Transformer preentrenado en 450 señas con fine-tuning. Top-1 de 90.6 % y top-3 de 98.1 % con personas nunca vistas, en 1.8 ms por búsqueda en CPU.',
    tech: ['PyTorch', 'Transformer', 'Transfer learning', 'MediaPipe', 'XAI'],
    repo: gh('ProyectoFinal-DL'),
    equipo: 'Con Esteban Cárcamo',
  },
  {
    titulo: 'MCP Chatbot desde cero',
    tipo: 'ai',
    etiqueta: 'Redes · IA',
    imagen: img('mcp-wireshark.png'),
    descripcion:
      'Chatbot de consola y web que implementa el Model Context Protocol a mano sobre JSON-RPC 2.0, sin SDK. Conecta un LLM con tres servidores de herramientas por stdio o HTTP, incluido un servidor propio que modela un ingenio azucarero. La interfaz en React muestra el tráfico del protocolo en tiempo real, analizado también en Wireshark.',
    tech: ['Python', 'FastAPI', 'React', 'JSON-RPC', 'Docker', 'Gemini'],
    repo: gh('Proyecto-chatbot'),
  },
  {
    titulo: 'Deep Q-Learning en Space Invaders',
    tipo: 'deeplearning',
    etiqueta: 'Reinforcement Learning',
    imagen: img('dqn.gif'),
    descripcion:
      'Agente DQN con una CNN que aprende a jugar Atari directamente desde los píxeles. Entrenado 8 M de pasos en GPU con checkpoints reanudables y experimentos en paralelo. Alcanzó 1815 puntos (promedio 1022) frente a ~150 de un agente aleatorio.',
    tech: ['PyTorch', 'Stable-Baselines3', 'Gymnasium', 'CNN'],
    repo: gh('Deep_Q_Learning'),
  },
  {
    titulo: 'Diagnóstico de Inventario GPN',
    tipo: 'extension',
    etiqueta: 'Horas de extensión',
    imagen: null, // TODO: agregar captura del dashboard
    descripcion:
      'Plataforma para analizar el desempeño de un programa de nutrición: a partir de los movimientos de bodega de cada mes genera un informe con gráficos, anomalías y alertas de control. Incluye una API que guarda el historial, calcula KPIs y tendencias y genera insights con un LLM, y un dashboard web.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    privado: true,
  },
  {
    titulo: 'Detección de pases en la Bundesliga',
    tipo: 'datascience',
    etiqueta: 'Visión por computadora',
    imagen: img('bundesliga.jpg'),
    descripcion:
      'Clasificación de ventanas de video de fútbol en pase, disputa, saque de banda o fondo. Detección de jugadores con YOLO, variables de movimiento y comparación entre XGBoost y una GRU sobre embeddings de ResNet18, evaluada en un partido nunca visto.',
    tech: ['Python', 'YOLO', 'OpenCV', 'XGBoost', 'PyTorch', 'Streamlit'],
    repo: gh('Proyecto2-DataScience'),
    equipo: 'Equipo de 4',
  },
  {
    titulo: 'Observatorio de turismo de Guatemala',
    tipo: 'datascience',
    etiqueta: 'Ciencia de datos',
    imagen: img('tablero-turismo.png'),
    descripcion:
      '17 años de llegadas de viajeros internacionales: pronósticos con ARIMA, Holt-Winters y LSTM, una infografía para directivos y un tablero interactivo que compara lo pronosticado con lo observado.',
    tech: ['Python', 'Plotly Dash', 'Statsmodels', 'LSTM'],
    repo: gh('Lab10-DataSicence'),
  },
  {
    titulo: 'Observatorio Turístico de La Antigua',
    tipo: 'datascience',
    etiqueta: 'Ciencia de datos',
    imagen: null,
    descripcion:
      'Tablero web de inteligencia turística para La Antigua Guatemala con datos institucionales: ETL, métricas de calidad de servicio, gasto y presión de eventos, listo para tomadores de decisión.',
    tech: ['Python', 'Plotly Dash', 'Pandas', 'Docker'],
    privado: true,
  },
  {
    titulo: 'Pronóstico de consumo eléctrico',
    tipo: 'deeplearning',
    etiqueta: 'Series de tiempo',
    imagen: img('forecasting.png'),
    descripcion:
      'Pronóstico de 24 horas del consumo de 100 clientes comparando 17 modelos con un mismo backtest: árboles, MLP, TCN, N-HiTS, iTransformer y Chronos-Bolt en zero-shot. El mejor (iTransformer) logra MASE 0.752 frente a 1.034 del baseline.',
    tech: ['PyTorch', 'NeuralForecast', 'LightGBM', 'Chronos'],
    repo: gh('Lab9-DL'),
    equipo: 'Con Esteban Cárcamo',
  },
  {
    titulo: 'Atención y Transformers desde cero',
    tipo: 'deeplearning',
    etiqueta: 'Deep Learning',
    imagen: img('transformers.png'),
    descripcion:
      'Implementación propia de atención y multi-head attention, verificada contra PyTorch (13/13 pruebas, error < 10⁻⁶). Análisis de los mapas de atención de BERT y GPT-2: correferencia, attention sinks y poda de cabezas.',
    tech: ['PyTorch', 'Hugging Face', 'BERT', 'GPT-2'],
    repo: gh('Hoja_trabajo_2_DL'),
  },
  {
    titulo: 'Cianobacteria en Atitlán y Amatitlán',
    tipo: 'datascience',
    etiqueta: 'Datos geoespaciales',
    imagen: img('cianobacteria.png'),
    descripcion:
      'Detección de zonas con alta presencia de cianobacteria a partir de imágenes satelitales Sentinel-2, con validación por bloques espaciales, explicaciones con SHAP y mapas predictivos de cada lago.',
    tech: ['Python', 'Rasterio', 'GeoPandas', 'scikit-learn', 'SHAP'],
    repo: gh('Lab4-parte2-DataScience'),
  },
]

// Cuántos se muestran antes de "Ver más proyectos"
export const DESTACADOS = 6
