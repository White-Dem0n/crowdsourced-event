# Crowdsourced Events

A modern React/Next.js application for discovering and sharing campus events. Built with TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Event Discovery**: Browse campus events by category (Free food, Sports, Cultural)
- **Event Creation**: Post new events with photos and descriptions
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Clean, accessible interface with dark mode support
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: React Icons & Lucide React

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── events/            # Events listing page
│   ├── create-event/      # Event creation page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── features/          # Feature-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Contact information and FAQ
- **Events** (`/events`) - Browse and filter campus events
- **Create Event** (`/create-event`) - Post new events

## Components

### Layout Components

- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Site footer with links

### Feature Components

- `EventFeed` - Display grid of events
- `EventFilters` - Category-based filtering
- `ContactSection` - Contact information
- `FAQSection` - Frequently asked questions
- `EventForm` - Event creation form
- `EventPhotoUpload` - Photo upload interface

### UI Components

- `Button` - Customizable button component
- `Card` - Content card wrapper
- `Badge` - Category/status badges
- `Tabs` - Tabbed interface
- `Accordion` - Collapsible content

## Development

The project follows modern React/Next.js best practices:

- **Component-based architecture** with clear separation of concerns
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Custom hooks** for reusable logic
- **Responsive design** with mobile-first approach

## Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/crowdsourced-events)

1. **Push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/crowdsourced-events.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

### Other Deployment Options

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Connect GitHub repo and deploy
- **DigitalOcean**: Use App Platform

### Environment Variables

Create `.env.local` for production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
