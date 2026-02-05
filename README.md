# Actividad3Arquitecturade-software
# universidad de las fuerzas Armadas
<img width="351" height="218" alt="image" src="https://github.com/user-attachments/assets/171cbc86-b733-4381-996b-0228cb03704e" />

# Sistema Editorial basado en Arquitectura de Microservicios
# Nombre: Alanis Valeria Tenemaza Parra

## 1. Introducción

El presente proyecto consiste en el diseño e implementación de un **sistema editorial** basado en una **arquitectura de microservicios**, cuyo propósito es gestionar autores y publicaciones de manera desacoplada, escalable y mantenible.  
La solución fue desarrollada aplicando principios de **ingeniería de software**, buenas prácticas de diseño y tecnologías modernas orientadas a sistemas distribuidos.


## 2. Objetivo del proyecto

Desarrollar una aplicación distribuida que permita:

- Gestionar autores y publicaciones mediante microservicios independientes.
- Modelar y validar el proceso editorial utilizando **BPMN 2.0**.
- Aplicar principios **SOLID** y patrones de diseño.
- Desplegar la solución de forma reproducible mediante **Docker Compose**.


## 3. Arquitectura del sistema

La arquitectura del sistema se basa en el enfoque de **microservicios**, donde cada componente cumple una responsabilidad específica y posee su propia base de datos.

### Componentes principales

- **Authors Service**  
  Microservicio encargado de la gestión de autores.

- **Publications Service**  
  Microservicio encargado de la gestión de publicaciones y su estado editorial.

- **Frontend Web**  
  Interfaz gráfica para la interacción del usuario con el sistema.

- **Bases de datos independientes**  
  Cada microservicio cuenta con su propia base de datos MySQL, garantizando bajo acoplamiento.

- **Docker Compose**  
  Utilizado para la orquestación y despliegue de los servicios.

La comunicación entre microservicios se realiza mediante **APIs REST**, evitando dependencias directas entre componentes.


## 4. Tecnologías utilizadas

- Node.js  
- NestJS  
- TypeORM  
- MySQL  
- React (Vite)  
- Docker y Docker Compose  
- Camunda Modeler (BPMN 2.0)


## 5. Modelado del proceso editorial (BPMN)

El proceso editorial fue modelado utilizando **BPMN 2.0**, representando las siguientes etapas:

1. Creación de la publicación  
2. Revisión editorial  
3. Decisión de aprobación  
4. Publicación o rechazo  
5. Solicitud de correcciones cuando aplica  

El modelo fue validado mediante **simulación de tokens**, permitiendo verificar el correcto flujo del proceso en distintos escenarios.


## 6. Patrones de diseño aplicados

Durante el desarrollo del sistema se aplicaron los siguientes patrones:

- **Repository Pattern**: separación entre la lógica de negocio y el acceso a datos.
- **Controller-Service Pattern**: organización clara de responsabilidades.
- **DTO (Data Transfer Object)**: validación y transporte seguro de datos entre capas.


## 7. Principios SOLID

La solución aplica los principios SOLID de la siguiente manera:

- **S (Single Responsibility)**: cada clase cumple una única responsabilidad.
- **O (Open/Closed)**: el sistema es extensible sin modificar el código existente.
- **L (Liskov Substitution)**: uso adecuado de herencia e interfaces.
- **I (Interface Segregation)**: interfaces específicas según la necesidad.
- **D (Dependency Inversion)**: dependencia de abstracciones y no de implementaciones concretas.


## 8. Endpoints principales

### Authors Service

- `POST /authors` – Crear autor  
- `GET /authors` – Listar autores  
- `GET /authors/{id}` – Obtener autor por identificador  

### Publications Service

- `POST /publications` – Crear publicación  
- `GET /publications` – Listar publicaciones  
- `GET /publications/{id}` – Obtener publicación  
- `PATCH /publications/{id}/status` – Actualizar estado editorial  


## 9. Instrucciones de despliegue

### Requisitos previos

- Docker Desktop  
- Git  


