# Courses App

Es un proyecto que recopila cursos gratuitos de YouTube y los organiza por categorías. Permite a los usuarios buscar y filtrar cursos, facilitando el acceso a contenido educativo.

## Características

- Construido con Next.js App Router.
- Optimizado para SEO utilizando Metadatos de Next.js.
- Componentes del servidor de React (RSC) y suspensión.
- Server Actions para las mutaciones (filtrar).
- Estilo con Tailwind CSS.

## Instalación

**Requerimientos**

- [Node.js](https://nodejs.org) (versión +v18.x) instalado.
- [Turso CLI](https://docs.turso.tech/cli/install) instalado (para usuarios de Windows, es necesario [activar WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install)).

**Pasos:**

1. Haz un fork de este proyecto:

   - [Haz clic aquí](https://github.com/imjesusc/courses-app/fork).

2. Clona el repositorio:

   ```bash
   git clone git@github.com:TU_USUARIO/courses-app.git
   ```

3. Instala las dependencias:

   ```bash
   # Instala pnpm globalmente si no lo tienes:
   npm install
   ```

4. Crea un archivo **.env.local** con el siguiente contenido:

   ```bash
   # Turso DB:
   NEXT_PUBLIC_TURSO_DATABASE_URL=
   NEXT_PUBLIC_TURSO_AUTH_TOKEN=

   # NextAuth.js v5 =>
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=

   # Youtube Data API v3
   NEXT_PUBLIC_YT_API_KEY=
   NEXT_PUBLIC_YT_URL=
   ```

   **Turso DB:**

   - [**Crea** una nueva base de datos con Turso](https://docs.turso.tech/cli/db/create).
   - [Obtén el **Auth Token** de Turso](https://docs.turso.tech/cli/auth/token).
   - [Obtén el **Database URL** de Turso](https://docs.turso.tech/cli/db/show).

   **NextAuth.js v5:**

   - [next-auth reference](https://authjs.dev/reference/nextjs)

   **Youtube Data API v3:**

   - [Youtube Data API v3](https://console.cloud.google.com/marketplace/product/google/youtube.googleapis.com?project=courses-app-424623)

5. Genera un nuevo archivo de migración con Prisma:

   - [Turso | Prisma](https://www.prisma.io/docs/orm/overview/databases/turso)

   ```bash
   npx prisma migrate dev --name [name]
   ```

6. Inserta los datos de migración en la base de datos de Turso. _(Cambia el **\***[name] por el nombre de archivo de la migración)_

   ```bash
   turso db shell turso-prisma-db < ./prisma/migrations/*****
   [name]/migration.sql
   ```

7. Ejecuta:

   - Servidor de desarrollo:

     ```bash
     npm run dev
     ```

   y abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue en Vercel

[my-courses-app.vercel.app](https://my-courses-app.vercel.app/)
