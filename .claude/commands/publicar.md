---
description: Publica cambios a main
---
Publica los cambios del proyecto para disparar el despliegue en Cloudflare.

Sigue este flujo exacto:
1. Ejecuta `git status --porcelain`.
2. Si no hay cambios, explica en lenguaje simple que no hay nada nuevo para publicar y termina.
3. Si hay cambios, ejecuta en este orden:
   - `git add .`
   - Si hay argumentos en el comando (`$ARGUMENTS`), usa ese texto como mensaje de commit: `git commit -m "$ARGUMENTS"`.
   - Si no hay argumentos, crea un mensaje de commit breve y claro en español basado en los cambios y úsalo en `git commit -m "..."`.
   - `git push origin main`
4. Si `git commit` falla por no tener cambios confirmables, explica el motivo de forma simple y no técnica.
5. Cuando termine el proceso (o si ya estaba todo publicado), cierra siempre con este mensaje exacto:

"Listo. Espera unos minutos mientras se despliega el sitio en https://bautismociri.com"
