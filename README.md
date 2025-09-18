# 🚀 CloneMe Stack

A modern, production-ready template for building web applications with the perfect stack combination.

## 🎯 Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety and developer experience
- **Framer Motion** - Smooth animations and interactions
- **shadcn/ui** - Beautiful, accessible component library
- **Zod** - Runtime type validation
- **Design Tokens** - Consistent design system

## ✨ Features

- 🎨 **Comprehensive Design Token System** - Colors, typography, spacing, shadows, and motion
- 🌓 **Theme Support** - Light, dark, and system themes with smooth transitions
- 📱 **Responsive Design** - Mobile-first approach with beautiful layouts
- ⚡ **Performance Optimized** - Built with Next.js 15 and Tailwind v4
- 🎭 **Rich Animations** - Framer Motion integration with token-based timing
- 🧩 **Component Library** - Pre-built shadcn/ui components
- 🔧 **Developer Experience** - TypeScript, ESLint, and modern tooling

## 🚀 Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd clone-me-project
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

The CloneMe stack includes a comprehensive design token system located in `styles/tokens.css`:

- **Colors**: `--bg`, `--fg`, `--muted`, `--accent` with theme variants
- **Typography**: Modular scale (`--s-2` through `--s7`) using Perfect Fourth ratio
- **Motion**: Standardized easing curves and durations
- **Gradients**: Beautiful gradient presets for backgrounds and accents
- **Shadows**: Consistent shadow system for depth

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/                # Utilities and configurations

styles/
└── tokens.css          # Design token system
```

## 🛠 Development

- **Add components**: `npx shadcn@latest add <component>`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Type check**: `npx tsc --noEmit`

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The app builds to static files and can be deployed anywhere:
```bash
npm run build
npm run start
```

## 🔧 Customization

1. **Colors**: Update CSS variables in `styles/tokens.css`
2. **Components**: Modify or add to `src/components/`
3. **Animations**: Adjust motion tokens and Framer Motion configs
4. **Theme**: Customize the theme system in `theme-provider.tsx`

## 📦 Adding Features

Common additions to the CloneMe stack:

- **Database**: Add Prisma + PostgreSQL/Supabase
- **Auth**: Implement NextAuth.js or Clerk
- **Forms**: Add React Hook Form + Zod validation
- **State**: Include Zustand or Redux Toolkit
- **Testing**: Jest + Testing Library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your projects!

---

**Ready to build something amazing?** 🚀

This template gives you everything you need to start building modern web applications with confidence.
