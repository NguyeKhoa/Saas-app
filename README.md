This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Clerk Authentication Setup

This project uses [Clerk](https://clerk.com/) for authentication. Follow these steps to set up Clerk in your local development environment:

## Setup Instructions

1. **Install Dependencies**

   The project already includes `@clerk/nextjs` in the package.json. Run the following command to install all dependencies:

   ```bash
   npm install
   ```

2. **Environment Variables**

   Create a `.env.local` file in the root of the project with the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```

   You can get these keys from your Clerk dashboard after creating a project.

3. **Clerk Configuration**

   The project is already configured with Clerk:

    - `middleware.ts` at the root of the project uses `clerkMiddleware()` from `@clerk/nextjs/server`
    - `app/layout.tsx` wraps the application with `<ClerkProvider>`
    - The Navbar component uses Clerk authentication UI components (`SignInButton`, `SignUpButton`, `UserButton`)

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Testing Authentication**

   Once the development server is running, you can test the authentication by:

    - Clicking the Sign In or Sign Up buttons in the navbar
    - Creating an account or signing in
    - After signing in, you should see the UserButton in the navbar

## Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs)
