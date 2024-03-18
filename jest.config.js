import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  test('renders carousel with planets', () => {
    render(<Home />);
    
    // Ensure the carousel title is rendered
    expect(screen.getByText(/Click on one of the elements/i)).toBeInTheDocument();

    // Ensure each planet in the solar system is rendered
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    planets.forEach(planet => {
      expect(screen.getByText(planet)).toBeInTheDocument();
    });
  });

  test('renders ThreeAnimation component with default texture', () => {
    render(<Home />);
    
    // Ensure the ThreeAnimation component is rendered with the default texture (Sun)
    const sunTexture = '/assets/sun.jpg';
    const threeAnimation = screen.getByTestId('three-animation');
    expect(threeAnimation).toBeInTheDocument();
    expect(threeAnimation).toHaveAttribute('texture', sunTexture);
  });

  test('updates texture when clicking on a planet', () => {
    render(<Home />);
    
    // Find and click on a planet in the carousel
    const planetButton = screen.getByText('Mars'); // Example: Click on Mars
    fireEvent.click(planetButton);

    // Ensure the ThreeAnimation component updates with the selected planet's texture
    const selectedPlanetTexture = '/assets/mars.jpg'; // Example: Mars texture
    const threeAnimation = screen.getByTestId('three-animation');
    expect(threeAnimation).toBeInTheDocument();
    expect(threeAnimation).toHaveAttribute('texture', selectedPlanetTexture);
  });
});
