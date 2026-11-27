# Laboratorio LogLens · dos perfiles
Material didáctico original, adaptado de los patrones de Martín Toledo y Migue Baena. No es código de sus autores.

## Elige tu punto de partida
- VS Code sin IA: no necesitas instalar Claude Code ni pagar una suscripción adicional. Mantén VS Code, Git, terminal y tus controles habituales; el agente DSH opera sobre la carpeta guardada. Consulta [primer flujo](./first-session-vscode.md).
- Con Claude Code: conserva tus configuraciones originales. Usa un inventario de activos y comprueba paridad solo con los entornos que tengas disponibles.

## Preparar
1. Descarga [loglens-starter.mjs](./loglens-starter.mjs) y léelo. Crea una carpeta nueva, sin red, instalaciones, Git ni sobrescritura.
2. En un directorio padre dedicado ejecuta `node loglens-starter.mjs`, `cd loglens-lab`. Necesitas Node.js y Git; no paquetes npm.
3. `git init`, `git add .`, `git commit -m "baseline LogLens"`. Si Git exige identidad, usa la configuración habitual o configura solo este repositorio. No conectes remoto.
4. `node --test tests/baseline.test.mjs` debe pasar; `node --test tests/acceptance.test.mjs` debe fallar (bug intencionado). `git status --short` debe quedar vacío. Guarda `git rev-parse HEAD`.
5. Abre solo loglens-lab en DSH y VS Code con permisos mínimos. Guarda los cambios en VS Code antes de enviar una tarea. No concedas acceso a HOME, secretos, red innecesaria o producción. No edites simultáneamente el mismo archivo.

## Ruta común y variantes
- M01: completa ADOPTION.md con [checklist](./adoption-checklist.md); si usas Claude Code, añade [inventario de migración](./migration-checklist.md).
- M02: setup, P02 y primera sesión P13 si nunca usaste IA. En ese perfil, antes de M04 intenta el bug manualmente en otra copia limpia del baseline durante 20–30 min, sin IA; guarda resultado/tiempo sin llevar tu solución a la sesión agente.
- M03: prueba multimodelo P03 si el presupuesto permite más de uno; benchmark.csv.
- M04: rama lab/bugfix, P04, solo src/summarize.mjs. Resultado mixto: accepted=3, rejected=3, duplicates=1, info=warn=error=1. Revisa diff y tests, commit manual.
- M05: rama lab/feature desde bug fix; P05; CLI y tests nuevos.
- M06: crea la skill en DSH, prueba descubrimiento e invocación (P06). Si ya tienes Claude Code, P14 opcional para paridad. Plugin solo con aislamiento.
- M07: máximo tres rondas adversariales y REVIEW.md, sesiones separadas o subagentes disponibles.
- M08: dos copias limpias del mismo SHA base, compara flujo manual vs DSH o Claude Code vs DSH si disponible. También se puede comparar DSH vs DSH, indicando el alcance. Si ya conocías la solución, documenta sesgo de aprendizaje; no declares causalidad. Completa ADOPTION.md y, si corresponde, MIGRATION.md.

## Entrega
SHA base, diff, comandos y exit codes, benchmark y decisión. Para manual, métricas IA N/A; para datos no observados N/D. Registra costes observados y tiempo humano, no inventes cifras. No publiques secretos, logs crudos o configuración personal. No se necesita GitHub ni Vercel para el laboratorio.

[Benchmark CSV](./benchmark.csv) · [Adopción](./adoption-checklist.md) · [Migración Claude Code](./migration-checklist.md) · [Skill](./skill-template.md) · [Prompts](./prompts.md)
