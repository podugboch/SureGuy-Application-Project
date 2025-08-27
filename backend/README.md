# SureGuy Backend

This is the backend for the SureGuy Application, built with Node.js, Express, TypeScript, Sequelize ORM, and PostgreSQL.

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/podugboch/SureGuy-Application-Project.git
   cd SureGuy-Application-Project/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Copy `.env.example` to `.env` and set your secrets.

4. **Run migrations and seeders (to be added):**

5. **Start the dev server:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Tech Stack

- Node.js + Express
- TypeScript
- PostgreSQL
- Sequelize ORM
- JWT Auth
- Nodemailer Email
- Bcrypt for password hashing

## Project Structure

- `src/config`     – DB and app configs
- `src/models`     – Sequelize models
- `src/routes`     – API routes
- `src/controllers`– Business logic
- `src/middlewares`– Auth, validation, etc.
- `src/utils`      – Helpers/utilities

---