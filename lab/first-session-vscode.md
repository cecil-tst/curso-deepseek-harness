# Primer flujo VS Code + DeepSeek Harness (sin Claude Code)

Para alguien que domina editor, Git, terminal y debugging pero nunca utilizó un agente. No necesitas contratar otro asistente. Una API puede facturar por consumo; local requiere hardware compatible. Revisa requisitos, tarifas y permisos.

1. Prepara LogLens siguiendo README.md. Abre la carpeta loglens-lab en VS Code. Comprueba rama, SHA base y git status. Guarda todos los archivos.
2. Arranca DSH siguiendo su [guía oficial](https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart) y el README del repo oficial. Utiliza URL local indicada, no expongas el servidor. Configura un modelo accesible y límite de gasto; nunca escribas la API key en el repositorio o prompt.
3. Selecciona el mismo workspace. Antes de enviar P13 (lectura), comprueba política de aprobación, sandbox y herramientas. Rechaza cambios y comandos no autorizados. Una instrucción de texto no sustituye los permisos reales.
4. Lee la respuesta y el trace. Abre en VS Code las rutas y fragmentos que el agente menciona. Ejecuta tú git status --short y comprueba que sigue vacío. Si cambió algo, detén la sesión e investiga.
5. Antes de M04, guarda un baseline manual: una copia limpia separada, intenta el bug sin IA durante 20–30 minutos, ejecuta tests y registra resultado/tiempo en benchmark.csv. No copies el parche al workspace DSH. Si no puedes hacerlo antes, declara el sesgo de aprendizaje al comparar.
6. Para un cambio real en M04, usa P04, solicita plan y aprueba archivos concretos. No edites simultáneamente el archivo en VS Code. Revisa Source Control / git diff, ejecuta tests y decide tú si haces commit. No push externo.

Fuente para revisar cambios: https://code.visualstudio.com/docs/sourcecontrol/overview
