# 🚗 AI-Powered Car Marketplace



A full-stack car marketplace with AI capabilities built with Next.js 15, React 19, and modern web technologies. Perfect for showcasing full-stack development skills.

## 🌟 Key Features

**AI Integration**
- Gemini API for intelligent car search
- AI-powered image recognition for car details
- Smart test drive scheduling

**Core Functionality**
- Complete car listing management
- Admin dashboard with analytics
- Admin can enter car details using Ai
- Test drive booking system
- EMI calculator (Create.xyz integration)

**Security**
- Clerk authentication
- Arcjet rate limiting & bot protection


## 🛠️ Tech Stack

| Category        | Technologies                          |
|-----------------|---------------------------------------|
| Frontend        | Next.js 15, React 19, Tailwind CSS    |
| UI Components   | Shadcn UI                             |
| Backend         | Next.js API Routes                    |
| Database        | Supabase + Prisma ORM                 |
| Authentication  | Clerk                                 |
| Security        | Arcjet (Rate limiting, Shield)        |
| AI Services     | Gemini API                            |
| Financial Tools | Create.xyz                           |

## 🚀 Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-car-marketplace.git
cd ai-car-marketplace

    Install dependencies

bash
Copy

npm install

    Set up environment variables
    Create .env.local file with:

env
Copy

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=
DIRECT_URL=

# AI Services
GEMINI_API_KEY=

# Security
ARCJET_KEY=

# Payment (optional)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
