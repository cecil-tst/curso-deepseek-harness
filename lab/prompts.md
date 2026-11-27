# Prompts técnicos · DeepSeek Harness v3.1

Comunes para ambos perfiles, salvo los identificados. No necesitan ejecutar Claude Code si no lo utilizabas.

## P01 · Inventario de migración desde Claude Code
**Perfil:** Con Claude Code

Trabaja en lectura sobre un inventario redactado por mí o una copia de laboratorio autorizada; no escanees mi configuración global. Identifica activos existentes: CLAUDE.md, AGENTS.md, .claude/skills, .claude/agents, hooks, settings, MCP, plugins y sesiones. No abras secretos, archivos de credenciales, historial personal ni configuraciones fuera del alcance. Devuelve matriz de ruta/ámbito, propósito, dependencia, reutilizar/adaptar/reconstruir/conservar, riesgo y prueba de paridad. No copies archivos ni asumas compatibilidad.

---

## P02 · Onboarding de codebase (solo lectura)
**Perfil:** Común

Analiza LogLens limitado a README.md, AGENTS.md, src, fixtures y tests. No escribas, instales dependencias ni accedas a red. Resume arquitectura, contratos, pruebas y comandos, con rutas y fragmentos verificables. Distingue observado de inferido. Si falta acceso, indícalo. Propón tres siguientes pasos sin ejecutarlos; reporta las acciones reales.

---

## P03 · Smoke test multimodelo
**Perfil:** Común

Lee fixtures/mixed.jsonl y README.md en el mismo commit. Sin editar, calcula valores esperados según el contrato, indica una prueba por caso y limitaciones del código actual. Si autorizo el comando, ejecuta solo node --test tests/baseline.test.mjs; registra salida y exit code. Devuelve accepted, rejected, duplicates, counts y evidencias. No inventes métricas. Usa este prompt idéntico en cada proveedor.

---

## P04 · Bug fix dirigido por tests
**Perfil:** Común

Corrige summarize() en src/summarize.mjs según README.md y tests/acceptance.test.mjs. Primero reproduce el fallo con los comandos node --test tests/baseline.test.mjs y node --test tests/acceptance.test.mjs si están autorizados. Presenta causa, plan y casos negativos. Contrato: blancos ignorados; JSON inválido, no objeto, id no string/vacío, level distinto de info/warn/error se rechazan; solo el primer registro válido de cada id se acepta; duplicados válidos incrementan duplicates. Conserva salida. Espera aprobación antes de editar exclusivamente src/summarize.mjs. No alteres tests/fixtures, no dependencias, red, commit ni push. Ejecuta node --test, muestra diff, códigos de salida y riesgos. Si falla, explica sin falsear.

---

## P05 · Feature CLI y pruebas de contrato
**Perfil:** Común

Desde el bug fix revisado, añade src/cli.mjs que reutilice summarize(). Entrada: node src/cli.mjs <archivo> --format json|text. JSON imprime el objeto de summarize() y salto de línea; texto imprime accepted=N rejected=N duplicates=N info=N warn=N error=N en ese orden, más salto de línea. Ruta inexistente, formato inválido o argumentos incompletos/adicionales: mensaje útil en stderr, exit code no cero. Solo src/cli.mjs y tests/cli.test.mjs; conserva código y pruebas previas, sin paquetes externos. Presenta plan y tests negativos, espera aprobación, implementa y ejecuta node --test. Entrega diff y evidencia. No commit ni push.

---

## P06 · Crear y validar una skill de code review en DSH
**Perfil:** Común

Usa skill-template.md para definir code-review: frontmatter name y description, alcance de lectura, pasos, salida y prueba de activación. Consulta las raíces admitidas en DSH y confirma que el preset permite cargar skills. No copies nada ni instales hasta aprobación. En una sesión nueva, revisa el mismo diff M04 con la skill. Registra descubrimiento, invocación, evidencia y límites; distingue un prompt de rol de una skill cargada. No necesitas otro asistente.

---

## P07 · Plugin local de snippets (Creator opcional)
**Perfil:** Común

En perfil/VM DSH aislado sin credenciales, inspecciona documentación de plugins vigente. Diseña un panel de snippets: título, categoría, texto, búsqueda, edición, copia y backup JSON. Los snippets son texto, nunca ejecución automática; sin red ni telemetría propia. Antes de instalar muestra estructura, dependencias, permisos, cambios de configuración y rollback; requiere aprobación expresa. Prueba recarga, importación/exportación, deshabilitación y retirada. Sin aislamiento real, entrega solo diseño o código revisable sin activarlo.

---

## P08 · Revisor adversarial de código
**Perfil:** Común

Solo lectura. Revisa README, requisitos, diff y tests. Busca contraejemplos, contratos rotos, pruebas debilitadas, fallos de seguridad, regresiones y cambios fuera de alcance. Por hallazgo: severidad bloqueante/alta/media/baja, archivo y línea, reproducción concreta, esperado vs observado y corrección mínima. Distingue hipótesis de hechos. Ejecuta pruebas solo si autorizadas; reporta comando y exit code. Si no hay hallazgos explica alcance y límites. No apruebes basándote en declaraciones del implementador; no modifiques ni hagas push.

---

## P09 · Debugger basado en hipótesis
**Perfil:** Común

Diagnostica sin editar. Reproduce el fallo con el comando autorizado y fixture mínima. Formula hasta tres hipótesis, evidencia a favor/en contra y experimento que las distingue. Localiza causa raíz con ruta y línea. Propón parche mínimo y test de regresión, sin aplicarlos. Señala incertidumbre, bloqueos y comandos/exit codes reales. No cambies tests ni instales nada.

---

## P10 · Bucle adversarial de hasta tres rondas
**Perfil:** Común

Máximo tres rondas en sesiones separadas o subagentes realmente disponibles. Revisor usa P08 y no modifica; implementador corrige solo hallazgos confirmados tras aprobación; validador verifica contrato, alcance del diff y tests autorizados. Registra por ronda hallazgo, severidad, cambio, prueba, evidencia y estado. Detén si no quedan bloqueantes o alcanzas el límite; reporta deuda. No simules independencia ni inventes hallazgos. No push.

---

## P11 · Analizar un benchmark de desarrollo
**Perfil:** Común

A partir de benchmark.csv compara resultados reales del mismo baseline, contrato, fixture, tests y restricciones. Selecciona comparación manual (VS Code sin IA) vs DSH, DSH vs DSH o un asistente previo vs DSH, según los datos. Registra éxito, alcance del diff, duración total, tiempo humano, intervenciones, coste observado, modelo y permisos. Para manual, métricas de modelo N/A; para datos no disponibles N/D. No conviertas cuota mensual en coste marginal sin método. Señala sesgo de aprendizaje, tamaño de muestra y diferencias de modelos; no atribuyas causalidad al harness. Recomienda solo con la evidencia disponible.

---

## P12 · Plan de adopción y fallback
**Perfil:** Común

Con ADOPTION.md, benchmark.csv y, solo si existe, MIGRATION.md, crea matriz de workflows con baseline, calidad, coste/latencia, riesgo, adoptar/adaptar/conservar flujo actual, control y rollback. Propón piloto por etapas, versiones, límite de gasto/reintentos y criterios de parada. Si el flujo previo era manual, mantén VS Code + Git como fallback; si usabas Claude Code, conserva lo que funcione. No copies claves, desinstales herramientas ni cambies producción. Declara pruebas pendientes.

---

## P13 · Mi primera sesión de agentic coding
**Perfil:** VS Code sin IA

Soy un desarrollador que usa VS Code y Git sin IA. Trabaja solo en LogLens y en lectura. Antes de llamar herramientas, explica en pocas líneas objetivo, archivos que necesitas, acciones previstas y qué no harás. Inspecciona únicamente README.md, AGENTS.md, src y tests. No edites, no instales, no red ni comandos sin autorización. Tras la lectura, muestra hallazgos con rutas y fragmentos, qué herramientas utilizaste realmente y cómo puedo verificarlo en VS Code. Propón un siguiente paso sin ejecutarlo. Si falta una capacidad, indícalo y detente.

---

## P14 · Verificar portabilidad de una skill Claude Code ↔ DSH
**Perfil:** Con Claude Code

Partiendo de la skill code-review, comprueba formato y descubrimiento por separado en DSH y Claude Code según las versiones instaladas. No leas ni copies configuraciones globales o credenciales. Propón adaptaciones mínimas manteniendo una fuente canónica; espera autorización para crear archivos. Revisa el mismo diff M04 en ambos entornos si están disponibles, registra prueba de activación, herramientas, evidencia, diferencias y qué no se puede portar. Si falta un entorno, marca esa prueba como no realizada; no lo instales ni contrates automáticamente.
