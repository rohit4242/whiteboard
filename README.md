# Project Overview

This is a Next.js project designed to provide a collaborative board application where users can create, manage, and share boards with their teams. The application leverages real-time collaboration features, allowing multiple users to interact with the boards simultaneously. It is built with a focus on user experience, performance, and scalability.

## Features

- **Real-time Collaboration**: Users can see changes made by others in real-time, enhancing teamwork and productivity.
- **User Authentication**: Secure sign-in and sign-up processes using Clerk for user management.
- **Dynamic Boards**: Create, edit, and delete boards with ease. Each board can contain various elements like notes, text, and images.
- **Responsive Design**: The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Customizable Themes**: Users can switch between light and dark themes for a personalized experience.
- **Rich Text Editing**: Integrated rich text editing capabilities for notes and other text elements.

## Live Preview

You can view a live demo of the application at the following link: [Live Preview](https://whiteboard-blue-nine.vercel.app/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or later)
- npm (Node Package Manager) or Yarn
- A PostgreSQL database (for data storage)
- An account with Clerk for authentication

## Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rohit4242/whiteboard
   cd whiteboard
   ```

2. **Install dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database and note the connection URL.
   - Update the `.env` file with your database connection string.

## Environment Setup

Create a `.env` file in the root of the project and add the following environment variables:

```env
DATABASE_URL=your_database_connection_string
CLERK_API_KEY=your_clerk_api_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_API_VERSION=2
```

Make sure to replace the placeholders with your actual values.

## Running the Project

To start the development server, run:

```bash
npm run dev
```

Or if you are using Yarn:

```bash
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Deployment Instructions

To deploy the application, follow these steps:

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Start the production server**:

   ```bash
   npm start
   ```

3. **Choose a hosting provider**:
   - You can deploy your Next.js application on platforms like Vercel, Netlify, or AWS.
   - Follow the specific instructions provided by your chosen hosting provider for deployment.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Clerk**: For user authentication and management.
- **PostgreSQL**: A powerful, open-source relational database.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Liveblocks**: For real-time collaboration features.
- **TypeScript**: A superset of JavaScript that adds static types.

## Conclusion

This Next.js project is a powerful tool for teams looking to enhance their collaboration and productivity. With its real-time features, user-friendly interface, and robust technology stack, it stands out as a comprehensive solution for managing collaborative boards.
