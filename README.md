# Sam's Landing - Next.js TypeScript App

A modern, high-performance landing page for Play It Again Sam's built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to link to your Vercel account and deploy.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Google Sheets Events Integration

The events section pulls data from a Google Sheets document. To update events:

1. Use the Google Sheet with ID in the URL (already configured in the code)
2. Ensure the sheet is published as CSV
3. Format columns as: Title, Date (M/D/YYYY), Description, Type, Active (TRUE/FALSE)

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Next.js automatic optimizations
- **SEO Ready**: Built-in metadata and Open Graph tags
- **Live Events**: Dynamic event loading from Google Sheets
- **Smooth Animations**: Scroll-triggered animations and transitions
- **24/7 Sticky Bar**: Smart navigation that appears on scroll

## 📁 Project Structure

```
sams-landing-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Hero.tsx        # Hero section with CTA
│   ├── StickyBar.tsx   # Sticky navigation bar
│   ├── Events.tsx      # Dynamic events section
│   ├── About.tsx       # About section
│   ├── Pillars.tsx     # Three pillars section
│   ├── VIP.tsx         # VIP booking section
│   └── Footer.tsx      # Footer with social links
├── public/
│   └── logo.svg        # Sam's logo
└── package.json        # Dependencies and scripts
```

## 🌐 Environment Variables

No environment variables are required for basic deployment. The Google Sheets URL is hardcoded in the Events component.

## 📝 Custom Domain

After deployment to Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., playitagainsams.com)
4. Follow DNS configuration instructions

## 🔧 Customization

- **Colors**: Edit the custom colors in `tailwind.config.ts`
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Content**: Update component files in `/components`
- **Events Sheet**: Change the Google Sheets URL in `components/Events.tsx`

## 📞 Support

For any issues or questions about deployment, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Built with ❤️ for Play It Again Sam's - Las Vegas' Only Gaming Gentlemen's Club Since 1972