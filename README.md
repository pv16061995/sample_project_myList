# My List Feature

This service implements the **"My List"** functionality for an OTT platform, allowing users to save, remove, and list their favorite movies or TV shows.

## Features

- Add item (movie/TV show) to a user's list
- Remove item from the list
- List all saved items (with pagination support)
- MongoDB schemas for users, movies, TV shows, and saved list
- Integration tests using Jest and Supertest
- TypeScript + Express architecture
- Optimized for performance (under 10ms for "List Items" endpoint)

---

## Tech Stack

- **Backend**: TypeScript, Express.js
- **Database**: MongoDB (via Mongoose)
- **Testing**: Jest, Supertest
- **Runtime**: Node.js
- **CI/CD Ready**

---

## Folder Structure

```
sample_test/
├── src/                  # Source code
│   ├── controllers/      # Route handlers (call services)
│   ├── models/           # Mongoose models (User, Movie, TVShow, List)
│   ├── routes/           # Express routes (e.g., myList.ts)
│   ├── services/         # Business logic
│   ├── middleware/       # Auth middleware (mock)
│   ├── utils/            # Common utilities
│   ├── seed.ts           # Script to insert sample data
│   └── index.ts          # Application entry point
├── tests/                # Integration tests using Jest & Supertest
├── .env                  # Environment variables (Mongo URI, etc.)
├── jest.config.js        # Jest configuration
├── package.json          # Scripts and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

---

## Setup Instructions

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/sample_test.git
cd sample_test
npm install
```

---

### 2. Environment Configuration

Create a `.env` file in the root of the project:

```env
MONGO_URI=mongodb://localhost:27017/my-list-db
```

> Make sure MongoDB is running locally or replace with your MongoDB Atlas URI.

---

### 3. Build the Project

To compile the TypeScript code:

```bash
npm run build
```

> Output is placed in the `dist/` directory.

---

### 4️. Run the Development Server

Start the server in development mode:

```bash
npm run dev
```

> This uses `ts-node-dev` for automatic restarts on file changes. The app will be accessible at `http://localhost:3000`.

---

### 5️. Seed the Database

To insert sample data (users, movies, TV shows):

```bash
npm run seed
```

> Data is defined in `src/seed.ts`.

---

### 6️. Run Tests

Execute integration tests:

```bash
npm run test
```

> Tests are located in the `tests/` directory and use Jest with Supertest.

---

## Notes

- This project assumes basic user authentication is mocked using middleware.
- You can modify or extend models, routes, and logic as needed for production.
- Designed for performance, scalability, and clean separation of concerns.

---

## Contact

For any issues, feel free to raise an issue or contribute via pull requests.
