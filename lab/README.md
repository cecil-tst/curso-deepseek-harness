# Laboratorio LogLens
Material didáctico original, adaptado de los patrones de ambos vídeos. No es código de sus autores.

## Preparar
1. Descarga [loglens-starter.mjs](./loglens-starter.mjs) y léelo. Crea una carpeta nueva, sin red, instalaciones, Git ni sobrescritura.
2. En un directorio padre dedicado ejecuta `node loglens-starter.mjs`, `cd loglens-lab`. Necesitas Node.js y Git; no paquetes npm.
3. `git init`, `git add .`, `git commit -m "baseline LogLens"`. Si Git exige identidad, usa tu configuración habitual o configura solo este repositorio. No conectes remoto.
4. `node --test tests/baseline.test.mjs` debe pasar; `node --test tests/acceptance.test.mjs` debe fallar (bug intencionado). `git status --short` debe quedar vacío. Guarda `git rev-parse HEAD`.
5. Abre solo loglens-lab en DSH con permisos mínimos. No concedas acceso a HOME, secretos, red innecesaria o producción. Usa Claude Code solo si está disponible y autorizado.

## Ruta
- M01: inventario de migración y criterios.
- M02: setup e inspección de repo (P02).
- M03: prueba multimodelo (P03) y benchmark.csv.
- M04: rama lab/bugfix, P04, solo src/summarize.mjs. Resultado mixto: accepted=3, rejected=3, duplicates=1, info=warn=error=1. Commit manual tras pruebas y diff.
- M05: rama lab/feature desde bug fix; P05; CLI y tests nuevos.
- M06: skill, descubrimiento, plugin opcional únicamente con aislamiento.
- M07: máximo tres rondas adversariales y REVIEW.md.
- M08: dos copias limpias del SHA base (clones locales, sin red); repite M04. No uses copias ya reparadas. Si no tienes Claude Code, compara modelos/presets y declara alcance. Completa MIGRATION.md.

## Entrega
SHA base, diff, comandos y exit codes, benchmark y decisión. No publicar credenciales, logs crudos ni configuraciones personales.

[Benchmark CSV](./benchmark.csv) · [Inventario](./migration-checklist.md) · [Skill](./skill-template.md) · [Prompts](./prompts.md)
