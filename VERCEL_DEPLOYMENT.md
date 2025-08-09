# Vercel Deployment Guide for Yatri App

## Setup Instructions

### 1. Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### 2. Deploy to Vercel

#### Option A: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on every push

#### Option B: Direct Deployment with CLI

```bash
vercel --prod
```

### 3. Configuration Details

The app is configured with:

- **Build Command**: `npm run vercel-build` (builds only the client/frontend)
- **Output Directory**: `dist/spa`
- **API Routes**: Serverless functions in `/api` directory
- **Client-side Routing**: Handled with `_redirects` file

### 4. Environment Variables

If you have any environment variables, add them in the Vercel dashboard:

- Go to your project in Vercel
- Navigate to Settings → Environment Variables
- Add your variables there

### 5. Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel
2. Navigate to Settings → Domains
3. Add your custom domain

## File Structure for Vercel

```
├── api/                    # Serverless functions
│   └── index.ts           # Main API handler
├── client/                # React frontend
├── dist/spa/              # Build output (auto-generated)
├── public/                # Static assets
│   └── _redirects         # Client-side routing configuration
├── server/                # Original Express server (for dev)
├── vercel.json            # Vercel configuration
└── package.json           # Updated with vercel-build script
```

## Notes

- The original Express server is only used in development
- In production, API routes are handled by Vercel serverless functions
- The frontend is served as a static site with client-side routing
- All API calls should use `/api/*` prefix

## Troubleshooting

If you encounter issues:

1. **Build Failures**: Check the build logs in Vercel dashboard
2. **API Issues**: Ensure API routes use `/api/*` prefix
3. **Routing Issues**: Verify `_redirects` file is in the `public` directory
4. **Dependencies**: Make sure all dependencies are in `package.json`

## Alternative: Netlify Deployment

You can also deploy to Netlify which has excellent React/SPA support. The current configuration with `_redirects` also works with Netlify.
