# Project Structure

This e-commerce application is organized using a feature-based architecture for better maintainability and scalability.

## Frontend Structure

```
src/
├── components/           # Shared/common components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   └── ui/              # Reusable UI components (shadcn/ui)
├── features/            # Feature-based modules
│   ├── auth/           # Authentication feature
│   │   ├── components/ # Auth-specific components
│   │   ├── hooks/      # Auth-specific hooks
│   │   └── pages/      # Auth pages
│   ├── cart/           # Shopping cart feature
│   │   └── hooks/      # Cart management hooks
│   └── products/       # Products feature
│       ├── components/ # Product-specific components
│       ├── data/       # Product data
│       └── types/      # Product type definitions
├── pages/              # Page components (routing)
├── lib/                # Shared utilities and configurations
├── hooks/              # Shared hooks
└── assets/             # Static assets (images, etc.)
```

## Backend Structure (Supabase)

```
supabase/
├── config.toml         # Supabase configuration
└── migrations/         # Database migrations
```

## Key Features

### 🔐 Authentication
- Complete auth system with sign up/sign in
- Session management with auto-refresh
- Protected routes and user state management

### 🛒 Shopping Cart
- Add/remove items
- Quantity management
- Persistent cart state
- Checkout process

### 📦 Products
- Product catalog with categories
- Product detail pages
- Featured products section
- Product search and filtering

### 🎨 Design System
- Consistent theming with semantic tokens
- Responsive design with Tailwind CSS
- Dark/light mode support
- Custom UI components

## Architecture Benefits

1. **Feature-based organization**: Related code is grouped together
2. **Clear separation of concerns**: Each feature manages its own state and logic
3. **Reusable components**: Shared components in `/components` folder
4. **Type safety**: TypeScript throughout the application
5. **Scalable**: Easy to add new features without affecting existing code

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. View the app at `http://localhost:5173`

## Database Schema

The application uses Supabase with the following main tables:
- `products`: Product catalog
- `orders`: Order information
- `order_items`: Items within orders
- `profiles`: User profile data

All tables include proper Row Level Security (RLS) policies for data protection.