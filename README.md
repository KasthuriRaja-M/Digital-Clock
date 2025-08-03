# Digital Clock

A beautiful, modern digital clock built with React. Features a glassmorphism design with real-time updates and responsive layout.

## Features

- ⏰ Real-time clock with hours, minutes, and seconds
- 📅 Current date display
- 🎨 Modern glassmorphism design
- 📱 Fully responsive design
- ✨ Smooth animations and hover effects
- 🌈 Beautiful gradient background

## Screenshots

The clock features:
- Large, easy-to-read digital display
- Pulsing colon separators
- Hover effects on time segments
- Full date display below the time
- Responsive design for all screen sizes

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Digital-Clock
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18.2.0
- CSS3 with modern features (backdrop-filter, gradients)
- JavaScript ES6+

## Project Structure

```
src/
├── components/
│   ├── DigitalClock.js      # Main clock component
│   └── DigitalClock.css     # Clock-specific styles
├── App.js                   # Main app component
├── App.css                  # App-specific styles
├── index.js                 # Entry point
└── index.css                # Global styles
```

## Customization

You can easily customize the clock by modifying:

- **Colors**: Update the gradient in `App.css` and colors in `DigitalClock.css`
- **Fonts**: Change the font-family properties in the CSS files
- **Animations**: Modify the keyframes and transition properties
- **Layout**: Adjust the flex properties and spacing

## Browser Support

This application uses modern CSS features like `backdrop-filter` and `backdrop-clip`. For best experience, use modern browsers like:
- Chrome 76+
- Firefox 70+
- Safari 13.1+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE). 