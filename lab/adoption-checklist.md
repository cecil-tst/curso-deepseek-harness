# ADOPTION.md — decidir si incorporar DeepSeek Harness

Perfil: VS Code sin IA / Con Claude Code (elige uno). No incluyas claves, datos reales ni configuración personal.

## Baseline habitual
| Tarea | Flujo actual (manual o asistido) | Resultado mínimo | Tiempo/coste observado | Qué puede delegarse | Qué reviso yo |
|---|---|---|---|---|---|
| Lectura de codebase | | | | | |
| Bug fix | | | | | |
| Feature | | | | | |

## Límites
- Versión, proveedor, modelo y permisos:
- Presupuesto máximo de prueba (incluido gasto remoto si aplica):
- Reintentos y tiempo máximo:
- Archivos autorizados, prohibidos y rollback:
- Pruebas de aceptación:

## Decisión con evidencia de benchmark.csv
| Workflow | Resultado y pruebas | Tiempo humano/total | Coste observado | Riesgo | Adoptar / adaptar / conservar flujo habitual | Fallback |
|---|---|---|---|---|---|---|
| Lectura | | | | | | |
| Bug fix | | | | | | |
| Feature | | | | | | |

Si el baseline es manual, conserva VS Code + Git como fallback; si usas Claude Code, conserva ese entorno y añade MIGRATION.md solo si tiene sentido. Declara diferencias de modelo, sesgo de aprendizaje, muestras insuficientes y métricas N/A o N/D. Define criterios de parada y de ampliación del piloto.
