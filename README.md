# Taskinator

Taskinator is a modular project and task management application built with React. It leverages modern libraries and tools to provide a robust, scalable, and maintainable architecture. This project demonstrates how to structure a React application using a modular approach.

## Features

- **Project and Task Management**: Create, edit, and manage projects and tasks.
- **Forms**: Uses `react-hook-form` and `zod` for form handling and validation.
- **Kanban Board**: Utilizes `dnd-kit` for a dynamic drag-and-drop Kanban board.
- **UI Components**: Built with `shadcn` for consistent and reusable UI components.
- **Authentication and Authorization**: Powered by `clerk` for seamless user authentication and authorization.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/taskinator.git
    cd taskinator
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Setup

Create a `.env.local` file in the root of the project with the following content:

    ```
    VITE_CLERK_PUBLISHABLE_KEY='key here'
    VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
    VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/onboarding
    VITE_CLERK_SIGN_IN_URL=/sign-in
    VITE_CLERK_SIGN_UP_URL=/sign-up
    ```

Replace `'key here'` with your actual Clerk publishable key.

### Running the Application

To start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

To create a production build:

    ```bash
    npm run build
    # or
    yarn build
    ```

The output will be in the `dist` directory. You can serve it with any static site hosting service.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [dnd-kit](https://dndkit.com/)
- [shadcn](https://ui.shadcn.com/)
- [clerk](https://clerk.com/)

---

Happy coding! 🚀
