# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ba3c85e3-2d75-4143-9ad8-f4796cd3f31d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ba3c85e3-2d75-4143-9ad8-f4796cd3f31d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment variables

Create a `.env` file for Vite (frontend):

```
VITE_SUPABASE_URL=your-new-project-url
VITE_SUPABASE_ANON_KEY=your-new-project-anon-key
```

For Supabase Functions (local via CLI), add to `supabase/.env`:

```
OPENAI_API_KEY=sk-...
OPENWEATHER_API_KEY=...
```

## Switching to a new Supabase project

1. Create a new project at the Supabase Dashboard.
2. Copy the `Project URL` and `anon` key into your `.env` as above.
3. In the new project's Settings > Functions > Environment variables, add:
   - `OPENAI_API_KEY`
   - `OPENWEATHER_API_KEY`
4. Deploy edge functions using the Supabase CLI:

```
supabase link --project-ref <your-new-project-ref>
supabase functions deploy chat-assistant
supabase functions deploy weather-data
supabase functions deploy market-data
```

5. Start the app:

```
npm run dev
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ba3c85e3-2d75-4143-9ad8-f4796cd3f31d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
