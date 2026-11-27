# Prompts técnicos · DeepSeek Harness

## P01 · Inventario de migración desde Claude Code

Trabaja en lectura sobre el laboratorio o un inventario redactado por mí. Identifica activos existentes: CLAUDE.md, AGENTS.md, .claude/skills, .claude/agents, hooks, settings, MCP, plugins y sesiones. No abras secretos, archivos de credenciales, historial personal ni configuraciones fuera del alcance. Devuelve matriz de ruta/ámbito, propósito, dependencia, reutilizar/adaptar/reconstruir/conservar, riesgo y prueba de paridad. No copies archivos ni asumas compatibilidad.

---

## P02 · Onboarding de codebase (solo lectura)

Analiza LogLens limitado a README.md, AGENTS.md, src, fixtures y tests. No escribas, instales dependencias ni accedas a red. Resume arquitectura, contratos, pruebas y comandos, con rutas y fragmentos verificables. Distingue observado de inferido. Si falta acceso, indícalo. Propón tres siguientes pasos sin ejecutarlos; reporta las acciones reales.

---

## P03 · Smoke test multimodelo

Lee fixtures/mixed.jsonl y README.md en el mismo commit. Sin editar, calcula valores esperados según el contrato, indica una prueba por caso y limitaciones del código actual. Si autorizo el comando, ejecuta solo node --test tests/baseline.test.mjs; registra salida y exit code. Devuelve accepted, rejected, duplicates, counts y evidencias. No inventes métricas. Usa este prompt idéntico en cada proveedor.

---

## P04 · Bug fix dirigido por tests

Corrige summarize() en src/summarize.mjs según README.md y tests/acceptance.test.mjs. Primero reproduce el fallo con los comandos node --test tests/baseline.test.mjs y node --test tests/acceptance.test.mjs si están autorizados. Presenta causa, plan y casos negativos. Contrato: blancos ignorados; JSON inválido, no objeto, id no string/vacío, level distinto de info/warn/error se rechazan; solo el primer registro válido de cada id se acepta; duplicados válidos incrementan duplicates. Conserva salida. Espera aprobación antes de editar exclusivamente src/summarize.mjs. No alteres tests/fixtures, no dependencias, red, commit ni push. Ejecuta node --test, muestra diff, códigos de salida y riesgos. Si falla, explica sin falsear.

---

## P05 · Feature CLI y pruebas de contrato

Desde el bug fix revisado, añade src/cli.mjs que reutilice summarize(). Entrada: node src/cli.mjs <archivo> --format json|text. JSON imprime el objeto de summarize() y salto de línea; texto imprime accepted=N rejected=N duplicates=N info=N warn=N error=N en ese orden, más salto de línea. Ruta inexistente, formato inválido o argumentos incompletos/adicionales: mensaje útil en stderr, exit code no cero. Solo src/cli.mjs y tests/cli.test.mjs; conserva código y pruebas previas, sin paquetes externos. Presenta plan y tests negativos, espera aprobación, implementa y ejecuta node --test. Entrega diff y evidencia. No commit ni push.

---

## P06 · Migrar y verificar una skill

Usa skill-template.md para preparar code-review con frontmatter name y description, alcance de lectura, pasos, salida y pruebas de activación. Conserva una fuente canónica sin credenciales, hooks ni comandos específicos de proveedor. Consulta rutas de descubrimiento en DSH y Claude Code por separado. Espera autorización antes de copiar o activar. Revisa el mismo diff del laboratorio y registra si se descubrió, cargó, herramientas y hallazgos. No declares portabilidad si no probaste ambos.

---

## P07 · Plugin local de snippets (Creator opcional)

En perfil/VM DSH aislado sin credenciales, inspecciona documentación de plugins vigente. Diseña un panel de snippets: título, categoría, texto, búsqueda, edición, copia y backup JSON. Los snippets son texto, nunca ejecución automática; sin red ni telemetría propia. Antes de instalar muestra estructura, dependencias, permisos, cambios de configuración y rollback; requiere aprobación expresa. Prueba recarga, importación/exportación, deshabilitación y retirada. Sin aislamiento real, entrega solo diseño o código revisable sin activarlo.

---

## P08 · Revisor adversarial de código

Solo lectura. Revisa README, requisitos, diff y tests. Busca contraejemplos, contratos rotos, pruebas debilitadas, fallos de seguridad, regresiones y cambios fuera de alcance. Por hallazgo: severidad bloqueante/alta/media/baja, archivo y línea, reproducción concreta, esperado vs observado y corrección mínima. Distingue hipótesis de hechos. Ejecuta pruebas solo si autorizadas; reporta comando y exit code. Si no hay hallazgos explica alcance y límites. No apruebes basándote en declaraciones del implementador; no modifiques ni hagas push.

---

## P09 · Debugger basado en hipótesis

Diagnostica sin editar. Reproduce el fallo con el comando autorizado y fixture mínima. Formula hasta tres hipótesis, evidencia a favor/en contra y experimento que las distingue. Localiza causa raíz con ruta y línea. Propón parche mínimo y test de regresión, sin aplicarlos. Señala incertidumbre, bloqueos y comandos/exit codes reales. No cambies tests ni instales nada.

---

## P10 · Bucle adversarial de hasta tres rondas

Máximo tres rondas en sesiones separadas o subagentes realmente disponibles. Revisor usa P08 y no modifica; implementador corrige solo hallazgos confirmados tras aprobación; validador verifica contrato, alcance del diff y tests autorizados. Registra por ronda hallazgo, severidad, cambio, prueba, evidencia y estado. Detén si no quedan bloqueantes o alcanzas el límite; reporta deuda. No simules independencia ni inventes hallazgos. No push.

---

## P11 · Benchmark A/B entre harnesses

Compara ejecuciones desde copias limpias del mismo commit con prompt, fixture, contrato, tests, permisos y criterio de aprobación iguales. Registra harness/versión, proveedor, modelo exacto, esfuerzo, llamadas, tokens observables, tiempo, coste, intervención y pruebas. Usa N/D si no hay dato, no inventes coste marginal de suscripción. Prioriza calidad y alcance del diff antes de precio. Si no coinciden modelos, explica que comparas sistemas completos. Recomienda por tarea y nivel de evidencia.

---

## P12 · Plan técnico de adopción y rollback

Con MIGRATION.md y benchmark.csv crea matriz de workflows: dependencia, calidad demostrada, coste/latencia, riesgo, migrar/adaptar/conservar, control y rollback verificable. Propón piloto gradual, versiones fijadas, skills versionadas y fallback a Claude Code. No copies claves, no desinstales nada ni cambies producción. Señala integraciones por reconstruir, pruebas pendientes y criterios de parada.
