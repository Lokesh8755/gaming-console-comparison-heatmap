# Gaming Console Features Heatmap

An interactive visualization tool that displays gaming console features comparison using a heatmap representation.

## Features

- Dynamic heatmap visualization of gaming console features
- Color-coded rating system (4.5+ to <2.5)
- Responsive design
- Interactive legend
- Clean, minimalist UI
- JSON data integration

## Tech Stack

- React.js
- Tailwind CSS
- JavaScript (ES6+)

## Project Structure

```
gaming-console-heatmap/
├── public/
│   ├── index.html
│   └── assessment.json
├── src/
│   ├── components/
│   │   ├── HeatmapContainer.js
│   │   ├── HeatmapGrid.js
│   │   ├── HeatmapCell.js
│   │   └── RatingLegend.js
│   ├── utils/
│   │   ├── colorUtils.js
│   │   ├── dataUtils.js
│   │   └── formatters.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/Lokesh8755/gaming-console-comparison-heatmap
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

## Component Architecture

- **HeatmapContainer**: Main component handling data fetching and layout
- **HeatmapGrid**: Manages grid structure and feature labels
- **HeatmapCell**: Individual cell with color mapping
- **RatingLegend**: Displays color scale reference

## Data Structure

The application expects JSON data in the following format:
```json
{
  "data": [
    {
      "name": "Console Name",
      "data": [
        {
          "label": "Feature_Name",
          "value": 4.5
        }
      ]
    }
  ]
}
```

## Styling

- Uses Tailwind CSS for responsive design
- Custom color gradients for ratings
- Mobile-first approach
- Clean typography