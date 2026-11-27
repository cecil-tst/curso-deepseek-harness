# Curso DeepSeek Harness · v3.1
https://curso-deepseek-harness.vercel.app/

Curso técnico para dos perfiles: power users de VS Code sin IA que evalúan su primer agente por coste y control, y usuarios con experiencia en Claude Code y VS Code que evalúan migración o coexistencia. No se necesita contratar Claude Code.

8 módulos, 28 lecciones (23 comunes, 2 específicas VS Code sin IA, 3 específicas Claude Code), 8 laboratorios, 14 prompts, 35 términos. Ruta VS Code: 25 lecciones, 10 h 05 min; ruta Claude Code: 26 lecciones, 9 h 50 min. Duración orientativa, no medición real.

Fuentes: [Martín Toledo](https://www.youtube.com/@SoyMartinToledo) ([vídeo](https://www.youtube.com/watch?v=WFlTNBh1PFk)) y [Migue Baena](https://www.youtube.com/@MigueBaenaIA) ([vídeo](https://www.youtube.com/watch?v=ZBSHJ7GtiPo)). Laboratorios propios adaptados de los vídeos; verifica documentación vigente.

[LogLens](lab/README.md) · [Primer flujo VS Code + DSH](lab/first-session-vscode.md) · [Adopción](lab/adoption-checklist.md) · [Migración Claude Code](lab/migration-checklist.md).

Selector de perfil persistente, etiquetas y filtro de lecciones/prompts/recursos, variantes de laboratorio y progreso por ruta; se conservan IDs y anotaciones, los fragmentos modificados quedan como notas históricas. El PDF contiene todos los contenidos e identifica perfiles. Despliegue automático GitHub main → Vercel. Español; imagen social PNG de 1200 × 630 generada durante el build desde assets/og.svg.

[Revisión v3.1](REVIEW-v3.1.md)

## Previsualización social

Los metadatos Open Graph y Twitter Card apuntan al PNG estático `/assets/social-preview-v1.png`, generado desde `assets/og.svg` durante `npm run build` con `@resvg/resvg-js` fijado a 2.6.2. El sitio continúa siendo estático: `dist/` contiene `index.html`, `assets/`, `lab/` y los documentos públicos. Para cambiar la portada, modifica el SVG; si necesitas invalidar cachés de redes, actualiza el nombre versionado del PNG en el script, los metadatos y `vercel.json`.
