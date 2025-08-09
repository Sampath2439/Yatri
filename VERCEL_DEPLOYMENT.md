# Vercel Deployment Guide for Yatri App

## 🚀 Quick Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Deploy**:
   - Click "Deploy" 
   - Vercel will automatically build and deploy your app

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   # For production deployment
   vercel --prod
   
   # For preview deployment
   vercel
   ```

## ⚙️ Build Configuration

### Automatic Detection
Vercel will automatically detect:
- **Framework**: React/Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist/spa`
- **Node.js Version**: 18.x or later

### Manual Configuration (if needed)
If auto-detection fails, set these in Vercel dashboard:

- **Build Command**: `vite build`
- **Output Directory**: `dist/spa`
- **Install Command**: `npm install`

## 📁 Project Structure for Vercel

```
yatri-app/
├── api/                    # Serverless API functions
│   ├── demo.ts            # /api/demo endpoint
│   └── ping.ts            # /api/ping endpoint
├── client/                # React frontend source
├── dist/spa/              # Build output (auto-generated)
├── public/                # Static assets
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Key Configuration Files

### `vercel.json`
```json
{
  "version": 2,
  "buildCommand": "vite build",
  "outputDirectory": "dist/spa",
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🌐 URLs After Deployment

Once deployed, your app will be available at:
- **Production**: `https://your-app-name.vercel.app`
- **API Endpoints**: 
  - `https://your-app-name.vercel.app/api/ping`
  - `https://your-app-name.vercel.app/api/demo`

## 🔄 Automatic Deployments

With GitHub integration:
- **Production**: Pushes to `main` branch → Auto-deploy to production
- **Preview**: Pushes to other branches → Auto-deploy to preview URLs
- **Pull Requests**: Automatic preview deployments for each PR

## 🐛 Troubleshooting

### Common Issues:

1. **White Screen**:
   - Check build logs in Vercel dashboard
   - Ensure `dist/spa` contains `index.html`
   - Verify no server imports in client code

2. **API Routes Not Working**:
   - Ensure API files are in `/api` directory
   - Check function exports: `export default function handler(req, res) {}`
   - Verify routes start with `/api/`

3. **Build Failures**:
   - Check Node.js version (minimum 18.x)
   - Verify all dependencies in `package.json`
   - Check for TypeScript errors

4. **404 on Refresh**:
   - Should be handled by `vercel.json` routes
   - Check SPA routing configuration

### Debug Commands:
```bash
# Local build test
npm run build
npm run preview

# Check build output
ls -la dist/spa/

# Test API locally
npm run dev
# Visit http://localhost:8080/api/ping
```

## 🎯 Production Checklist

Before deploying:
- [ ] All routes work locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Preview works (`npm run preview`)
- [ ] API endpoints respond correctly
- [ ] No console errors in browser
- [ ] All dependencies in `package.json`

## 🔧 Environment Variables

If you need environment variables:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy to apply changes

## 📞 Support

If deployment fails:
1. Check Vercel build logs
2. Test locally with production build
3. Verify all files are committed to Git
4. Ensure no Netlify-specific configurations remain

---

## Quick Deploy Commands Summary

```bash
# One-time setup
git add .
git commit -m "Deploy to Vercel"
git push origin main

# Using CLI
npm install -g vercel
vercel login
vercel --prod
```

Your Yatri app will be live at `https://your-project-name.vercel.app` 🚀
