# Revisión v3.1 — dos perfiles

Tres rondas de revisión crítica del asistente; no se dispone de un subagente independiente. No se ha ejecutado un modelo real de DSH/Claude ni un navegador.

## Loop 1: inclusión y encaje pedagógico
- Hallazgo: el título y M01 asumían migración; M06 exigía dos harnesses; M08 comparaba obligatoriamente contra Claude Code.
- Corrección: 23 lecciones comunes; 2 de inicio VS Code; 3 Claude Code; primer flujo explicado, control del presupuesto, ruta manual sin IA, skill probada solo en DSH y benchmark frente al baseline habitual. Comparación con Claude solo si existe acceso. Se preserva la profundidad técnica y no se enseña de nuevo Git básico a power users.

## Loop 2: prácticas y evidencia
- Hallazgo: comparar un bug ya resuelto manualmente sesga tiempos; precio de suscripción no equivale a coste por tarea. Una instrucción de texto no garantiza permisos.
- Corrección: baseline manual antes de M04 en copia limpia, límite 20–30 minutos, sesgo de aprendizaje declarado, métricas N/A vs N/D, mismo contrato/tests, permisos efectivos, revisión de diffs en VS Code. ADOPTION.md común, MIGRATION.md solo para Claude, P13 primera sesión y P14 portabilidad. Creator opcional.

## Loop 3: integración y regresiones
- Hallazgo: un filtro de perfil podría ocultar lecciones pero seguir marcándolas al completar módulo; progreso no sería comparable y exportaciones podrían ocultar contenido.
- Corrección: progreso y marcado por ruta, estado compartido de IDs, cambio reversible entre perfiles, selector persistente, etiquetas y filtros combinables, recursos/Markdown/PDF coherentes. PDF contiene todo. Restauración conserva perfil cuando está presente; navegación a una anotación de otra ruta abre Todos. Pruebas puras de filtro/marcado y sintaxis en Code Mode.

## Evidencia
- PASS — 28 lecciones, 23 comunes, 2 VS Code, 3 Claude
- PASS — ambas rutas 8 módulos
- PASS — sin requisitos Claude en ruta inicial
- PASS — IDs originales conservados
- PASS — filtro de lecciones
- PASS — marcado de módulo solo ruta y cambio reversible
- PASS — prompts y materiales por perfil
- PASS — búsqueda/perfil y backup
- PASS — PDF incluye perfiles y variantes
- PASS — no IDs duplicados
- PASS — scripts sintácticos
- PASS — anotaciones y progreso existentes
- PASS — benchmark manual y control de sesgo
- PASS — selectores y recursos se inicializan
- PASS — autores y materiales intactos

Duraciones estimadas: VS Code 10 h 05 min, Claude Code 9 h 50 min. No son tiempos medidos con alumnos. Pendiente QA visual y pruebas E2E en navegador, además de prácticas reales con modelos. Se conservan las pruebas previas del laboratorio sin modificar su código.

## Comprobaciones adicionales de integración
- PASS — VS Code 25 / Claude 26 / todos 28
- PASS — búsqueda no recupera lección Claude oculta
- PASS — nivel y perfil se combinan
- PASS — progreso y perfil se combinan
- PASS — variante de práctica manual no muestra Claude
- PASS — variante Claude no muestra manual
- PASS — Todos muestra dos variantes
- PASS — 4 scripts correctos

Ajustes: nivel del módulo según ruta; restauración coherente de búsqueda en navegación a un módulo o destacado; título social; paginación del PDF con límite por línea. Comprobaciones de lógica JavaScript y sintaxis, no E2E visuales.
