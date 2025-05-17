# 🖼️ PixelFinder - Image Search Application

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Pexels API](https://img.shields.io/badge/API-Pexels-green)](https://www.pexels.com/api/)

A modern, responsive web application that allows users to search for and download high-quality images powered by the Pexels API. With an elegant UI, smooth animations, and intuitive controls, PixelFinder makes finding the perfect image a breeze.

![PixelFinder Banner](https://github.com/user-attachments/assets/db16c564-98fb-47b0-b7ff-056e533ce579)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖥️ Demo](#-demo)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🔑 API Key](#-api-key)
- [💻 Usage](#-usage)
- [🎨 UI/UX Features](#-uiux-features)
- [📱 Responsive Design](#-responsive-design)
- [🛠️ Technologies Used](#-technologies-used)
- [🔮 Future Enhancements](#-future-enhancements)
- [👏 Credits](#-credits)
- [📄 License](#-license)

## ✨ Features

- **🔍 Powerful Image Search**: Search for images based on keywords and get high-quality results
- **⬇️ One-Click Downloads**: Download images directly from the search results with a single click
- **📄 Pagination**: Load more images with the "Show More" button for endless browsing
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **🎭 Rich Animations & Effects**:
  - Smooth background gradient transitions for an engaging visual experience
  - Animated header with dynamic background clip for an eye-catching title
  - Interactive image hover effects with photographer attribution
  - Animated search bar with dynamic placeholder text and icon transitions

## 🖥️ Demo

![PixelFinder Demo](https://github.com/user-attachments/assets/db16c564-98fb-47b0-b7ff-056e533ce579)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- A Pexels API key (free to obtain)

### Installation

1. Clone the repository or download the ZIP file
   ```bash
   git clone https://github.com/yourusername/pixelfinder.git
   ```

2. Navigate to the project directory
   ```bash
   cd pixelfinder
   ```

3. Open the project in your code editor

4. Update the API key in `script.js` (see [API Key](#-api-key) section)

5. Open `index.html` in your browser or use a local development server like Live Server in VS Code

## 🔑 API Key

To run this project locally, you need to obtain an API key from [Pexels](https://www.pexels.com/api/):

1. Create a free account on [Pexels](https://www.pexels.com/)
2. Navigate to the [API section](https://www.pexels.com/api/) and request an API key
3. Replace the `apikey` variable in `script.js` with your API key:

```javascript
const apikey = "YOUR_PEXELS_API_KEY";
```

## 💻 Usage

- **Search for Images**: Type a keyword in the search box and press Enter
- **Browse Results**: Scroll through the image gallery to find what you need
- **Load More**: Click the "Show More" button at the bottom to load additional images
- **View Details**: Hover over an image to see the photographer's name and download option
- **Download**: Click the download button to save the image to your device

## 🎨 UI/UX Features

- **Clean Interface**: Minimalist design focuses attention on the images
- **Visual Feedback**: Hover and focus states provide clear user feedback
- **Smooth Transitions**: All interactions include smooth animations for a polished feel
- **Accessibility**: High contrast text and intuitive controls for better usability

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Multi-column layout for large screens
- **Tablet**: Adjusted layout for medium-sized screens
- **Mobile**: Single-column layout with optimized controls for small screens

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox, CSS grid, and animations
- **JavaScript**: ES6+ features for interactive functionality
- **Pexels API**: For fetching high-quality, royalty-free images
- **Google Fonts & Material Icons**: For typography and iconography

## 🔮 Future Enhancements

- Image filtering by orientation, size, and color
- User collections/favorites
- Light/dark mode toggle
- Advanced search options
- Image details modal with full metadata

## 👏 Credits

- Images provided by [Pexels](https://www.pexels.com/)
- Icons from [Google Material Icons](https://fonts.google.com/icons)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
