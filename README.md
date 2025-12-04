# Angular Student Portal Frontend

## Project Structure
```
src/
├── app/
│   ├── models/                 # TypeScript data models (DTOs)
│   │   └── student.ts
│   ├── services/               # Business logic & API calls
│   │   ├── student.service.ts
│   │   ├── auth.service.ts
│   │   └── message.service.ts
│   ├── guards/                 # Route guards for authentication
│   │   └── auth.guard.ts
│   ├── components/             # UI components
│   │   ├── student-list/
│   │   ├── student-item/
│   │   ├── student-detail/
│   │   ├── login/
│   │   ├── sender/
│   │   └── receiver/
│   ├── app-routing.module.ts   # Routing definition
│   └── app.module.ts           # Root Angular module
├── index.html
├── main.ts
├── styles.scss
├── angular.json
├── package.json
└── README.md

```

## Overview

This Angular project consumes the NestJS Student API and provides: - GET
student list - GET student by ID - Reactive form login - AuthGuard
protected routes - Child component communication using @Input/@Output -
Cross-component communication using shared service with RxJS Subject

## API Base URL

Configured to call:

    /api/students
    /api/students/:id

Ensure your NestJS backend is running at:

    http://localhost:3000

## Development

Start the Angular dev server:

    ng serve

App runs at:

    http://localhost:4200

## Features Demonstrated

-   HttpClient + typed services
-   RxJS transformation (map operator)
-   Route guards (AuthGuard)
-   ReactiveFormsModule
-   Parent--child component communication
-   Shared service event bus (Subject)
