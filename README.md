# 📺 YouTube Clone

A modern, responsive YouTube clone built with React and Vite, featuring video browsing, searching, and video playback functionality using the YouTube API.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)
## Live Link
https://my-youtube-clone-vidtube.netlify.app/

## 🎯 Features

- **Video Browsing** - Browse trending and popular videos by category
- **Video Search** - Search for videos across YouTube
- **Video Playback** - Watch videos with detailed information
- **Video Recommendations** - Get recommended videos based on current viewing
- **Comments Section** - View video comments and statistics
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Channel Information** - View channel details and subscriber count
- **Video Statistics** - Display views, likes, and publication date
- **Fast Performance** - Built with Vite for optimized development and production builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: CSS3 with Flexbox/CSS Grid
- **Routing**: React Router v7
- **Date Handling**: Moment.js
- **API**: YouTube Data API v3
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)
- YouTube Data API key (get it from [Google Cloud Console](https://console.cloud.google.com/))

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Add your YouTube API key:
```env
VITE_API_KEY=your_youtube_api_key_here
```

**Important**: The `.env` file is in `.gitignore` and will **not** be pushed to GitHub, keeping your API key secure.

### Step 4: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── Components/
│   ├── Feed/           # Video feed component
│   ├── Navbar/         # Navigation bar
│   ├── PlayVideo/      # Video player with comments
│   ├── Recommended/    # Recommended videos sidebar
│   └── Sidebar/        # Category sidebar
├── Pages/
│   ├── Home/           # Homepage
│   └── Video/          # Video detail page
├── App.jsx             # Main app component
├── data.js             # API configuration
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎮 Usage

### Browse Videos
1. Open the application
2. Select a category from the sidebar
3. Browse trending videos in your selected category

### Watch a Video
1. Click on any video from the feed
2. Watch the video and read details
3. View comments and channel information
4. See recommended videos

### Search Videos
1. Use the search bar in the navbar
2. Enter keywords and press Enter
3. View search results

## 🔧 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm lint
```

## 📝 Environment Variables

The project uses the following environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_KEY` | YouTube Data API key | `AIzaSy...` |

**Note**: For production deployment (e.g., Netlify), add `VITE_API_KEY` to your platform's environment variables in the dashboard.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. In Netlify Dashboard → **Site settings** → **Build & deploy** → **Environment**
4. Add environment variable:
   - Key: `VITE_API_KEY`
   - Value: `your_youtube_api_key`
5. Trigger a redeploy

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable `VITE_API_KEY` in project settings
4. Deploy automatically

## 🐛 Troubleshooting

### API Key shows as `undefined`
- **Local**: Restart dev server (`npm run dev`)
- **Production**: Ensure environment variable is set in your hosting platform's dashboard

### CORS Error
- This is expected for local development with YouTube API
- Use a browser extension or check CORS policy in YouTube API settings

### Videos not loading
- Verify your API key is valid
- Check YouTube API quota in Google Cloud Console
- Ensure API is enabled in Google Cloud Console

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [React Router Documentation](https://reactrouter.com)

## 👨‍💻 Author

[Your Name](https://github.com/yourusername)

## ⭐ Show Your Support

If you found this project helpful, please consider giving it a star! ⭐

---

**Last Updated**: April 2026
