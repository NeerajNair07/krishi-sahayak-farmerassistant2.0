# Krishi Sahayak - Your Intelligent Farming Companion

## 🌱 About

Krishi Sahayak is an AI-powered agricultural assistant designed specifically for Indian farmers. It provides multilingual support, real-time weather forecasts, market prices, personalized crop management advice, and sustainable farming guidance to help farmers make informed decisions and improve their yields.

## ✨ Features

- **🌤️ Weather Intelligence**: Accurate weather forecasts and farming recommendations based on local conditions
- **🌾 Crop Management**: AI-powered crop advice, disease detection, and personalized farming schedules
- **💰 Market Insights**: Real-time market prices, MSP information, and selling recommendations
- **🌍 Multilingual Support**: Available in Hindi, Tamil, Telugu, Marathi, and English
- **🤖 AI Chat Assistant**: Intelligent chatbot for farming queries and guidance
- **💧 Irrigation Guide**: Personalized irrigation recommendations based on crop stages and weather
- **🌿 Fertilizer Advice**: Customized fertilizer recommendations with cost analysis
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Supabase account for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/krishi-sahayak-farmerassistant2.0.git
   cd krishi-sahayak-farmerassistant2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **AI Integration**: OpenAI GPT models
- **Weather Data**: OpenWeatherMap API
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HomePage.tsx    # Landing page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── ChatInterface.tsx # AI chat interface
│   └── ...
├── pages/              # Page components
│   ├── Auth.tsx        # Authentication page
│   └── ...
├── lib/                # Utility functions and data
│   ├── translations.ts # Multilingual support
│   ├── cropData.ts     # Crop information
│   └── ...
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/       # Supabase configuration
└── main.tsx           # Application entry point
```

## 🌐 Deployment

### Using Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Using Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Set up the database schema using the provided migrations
3. Deploy edge functions for AI chat, weather data, and market data
4. Configure environment variables

### API Keys

You'll need the following API keys:

- **Supabase**: Project URL and anonymous key
- **OpenAI**: For AI chat functionality
- **OpenWeatherMap**: For weather data

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Indian farmers for their invaluable feedback
- Open source community for amazing tools and libraries
- Agricultural experts for domain knowledge
- Weather and market data providers

## 📞 Support

For support, email us at support@krishi-sahayak.com or create an issue in this repository.

---

**Made with ❤️ for Indian Farmers**