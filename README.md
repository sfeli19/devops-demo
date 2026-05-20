# Proyecto DevOps Demo

## Descripción
Proyecto demostrativo para explicar DevOps Moderno, CI/CD y GitHub Actions.

## Objetivo
Mostrar cómo automatizar pruebas y validaciones usando GitHub Actions.

## Tecnologías usadas

- Node.js
- Jest
- GitHub Actions
- GitHub
- JavaScript

## Estructura del proyecto

```bash
src/
tests/
.github/workflows/
```

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar pruebas:

```bash
npm test
```

## Flujo DevOps implementado

1. Desarrollo local.
2. Commit y push.
3. GitHub Actions ejecuta automáticamente:
   - instalación de dependencias
   - pruebas automáticas
4. Validación del proyecto.

## Evidencia de CI/CD

El pipeline detecta automáticamente errores y valida la aplicación.

## Integrantes

- Andres Felipe Alarcon Abril

## Flujo de ramas

Durante la práctica se utilizó la rama principal `main`.

Flujo implementado:

1. Desarrollo local.
2. Commit de cambios.
3. Push al repositorio GitHub.
4. GitHub Actions ejecuta pruebas automáticamente.
5. Validación del pipeline.
6. Corrección de errores detectados.

En proyectos reales se recomienda usar ramas adicionales como:

- feature/*
- develop
- release
- hotfix