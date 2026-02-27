---
trigger: always_on
---

# 🚨 COMMIT.md — FLUJO DE TRABAJO BLINDEADO

**TODO PROYECTO. Antigravity DEBE cumplir estas reglas SIEMPRE.**

---

## 🎯 OBJETIVO
Main siempre estable. Nunca perder progreso. Experimentos en ramas.

## 📋 REGLAS OBLIGATORIAS

### ❌ ANTES de tocar código (SIEMPRE):
git status && git branch

Si main Y cambios sin commitear:
git add . && git commit -m "SAFE: Pre-[Story] backup" && git push origin main

git checkout -b feature/[story-slug] && git push origin feature/[story-slug]

git status && git branch # Confirma nueva rama

text
**ESPERAR APROBACIÓN "OK PARA CONTINUAR"**

### ✅ DURANTE implementación:
□ Usar Planning Mode para features > 3 archivos
□ No tocar lógica de producción sin espec
□ npm run lint && npm run build sin errores
□ No romper features existentes

text

### ✅ DESPUÉS de completar Story:
git add .

git commit -m "feat: [Story-ID] [título] - ✅ criterios aceptados"

git push origin HEAD

npm run lint && npm run build

git status

text
**MOSTRAR RESULTADOS AL USUARIO**

### ✅ CRITERIOS para marcar Story DONE:
□ Todos criterios funcionales cumplidos
□ npm run lint → PASS
□ npm run build → SIN ERRORES
□ localhost:3000 → visual OK (desktop/mobile)
□ Usuario confirma: "APROBADO"

text

### 🔄 MERGE a main (SOLO con aprobación):
git checkout main && git pull origin main
git merge feature/[story-slug]
git push origin main
git branch -d feature/[story-slug]
git push origin --delete feature/[story-slug]

text

---

## 🚨 EMERGENCIA (ejecutar si algo sale mal):

git add .

git commit -m "🚨 EMERGENCY: Estado actual $(date +%Y%m%d)"

git push origin main

git checkout -b recovery-$(date +%Y%m%d)

git push origin recovery-$(date +%Y%m%d)

text

---

## 🎨 TEMPLATE DE PROMPT (USAR SIEMPRE)

🚨 FLUJO BLINDEADO — Story [ID]: [Título]

PASO 1 → GIT STATUS
git status && git branch

PASO 2 → BACKUP MAIN
git add . && git commit -m "SAFE: Pre-[Story-ID]" && git push origin main

PASO 3 → NUEVA RAMA
git checkout -b feature/[story-slug] && git push origin feature/[story-slug]

PASO 4 → CONFIRMAR
git status && git branch

PASO 5 → SI USUARIO DICE "OK", IMPLEMENTAR:
[Criterios específicos de la Story]

PASO 6 → VERIFICAR
npm run lint && npm run build && git status

PASO 7 → COMMIT FINAL
git add . && git commit -m "feat: [Story-ID] ✅ criterios aceptados" && git push origin HEAD

ESPERAR APROBACIÓN USUARIO PARA MERGE

text

---

## 📝 Convención de nombres de ramas

main → Estado productivo estable
develop → Integración continua (opcional)
feature/cta-polish → Nuevas funcionalidades
hotfix/color-contrast → Bugs críticos
experiment/ds-figma → Pruebas con skills
release/v1.1-mvp → Para deploy producción

text

---

## 🆘 COMANDOS DE EMERGENCIA (memorizar)

git checkout main && git pull origin main # Volver a estado estable
git branch -D feature/[error] # Borrar rama mala
git revert HEAD # Deshacer último commit

text

---

## 📊 CHECKLIST DIARIO (antes de empezar)

□ git status → working tree clean
□ git branch → rama correcta
□ git log --oneline -3 → commits descriptivos
□ npm run build → sin errores
□ rosaceleste.vercel.app → visual OK

text

**Antigravity: este archivo es tu contrato. CUMPLIR SIEMPRE.**