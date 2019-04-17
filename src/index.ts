import printMe from './print';
import './style.scss';

// Set up the HTML
const body: HTMLElement = document.body,
      container: HTMLElement = document.createElement('div'),
      results: HTMLElement = document.createElement('div');
container.classList.add('container');
results.id = 'results';
container.appendChild(results);
body.appendChild(container);

// App logic
printMe('Print this phrase');