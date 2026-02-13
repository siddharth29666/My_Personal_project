# How to Deploy to Vercel 🚀

There are two main ways to deploy your project to Vercel:

## Option 1: Using the Vercel Dashboard (Recommended)

1.  **Push your code to GitHub/GitLab/Bitbucket.**
    *   Initialize a git repository if you haven't already:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   Create a new repository on GitHub and push your code there.

2.  **Go to [Vercel.com](https://vercel.com) and log in.**

3.  **Click "Add New..." -> "Project".**

4.  **Import your Git Repository.**
    *   Select the repository you just created.

5.  **Configure Project:**
    *   **Framework Preset:** Vercel should automatically detect "Vite".
    *   **Root Directory:** `./` (default)
    *   **Build Command:** `npm run build` (default)
    *   **Output Directory:** `dist` (default)

6.  **Click "Deploy".**
    *   Vercel will build your project and give you a live URL in seconds!

---

## Option 2: Using Vercel CLI (Command Line)

If you prefer using the terminal:

1.  **Install Vercel CLI:**
    ```bash
    npm install -g vercel
    ```

2.  **Login to Vercel:**
    ```bash
    vercel login
    ```

3.  **Deploy:**
    Run this command in your project folder:
    ```bash
    vercel
    ```

4.  **Follow the prompts:**
    *   Set up and deploy? **Y**
    *   Which scope? (Select your account)
    *   Link to existing project? **N**
    *   Project name? (Press Enter for default)
    *   In which directory is your code located? `./` (Press Enter)
    *   Want to modify these settings? **N**

5.  **Wait for deployment!**
    *   It will give you a `Production` URL once complete.

---

### NOTE:
Since you have a **Single Page Application (SPA)**, I have already added a `vercel.json` file for you. This ensures that refreshing the page on sub-routes works correctly (though your current app is mostly on one page).

Enjoy sharing your Valentine's site! ❤️
