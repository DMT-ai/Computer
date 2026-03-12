import { MarketView } from './components/MarketView.js';
import { BuilderView } from './components/BuilderView.js';
import { GameCheckView } from './components/GameCheckView.js';

// Main Application Entry Point

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log('NextGen PC Builder initialized.');
    
    // Instantiate builder view once so state is retained across tab switches
    const builderContainer = document.createElement('div');
    const builderViewInst = new BuilderView(builderContainer);

    // Setup Navigation Routing
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');
            
            // Update active styling
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            // Route
            renderView(targetTab, builderViewInst);
        });
    });
    
    // Initial Render
    renderView('market', builderViewInst);
}

function renderView(viewName, builderViewInst) {
    const root = document.getElementById('app-root');
    root.innerHTML = ''; // Clear current
    
    const viewContainer = document.createElement('div');
    viewContainer.className = 'fade-in';
    
    switch(viewName) {
        case 'market':
            viewContainer.innerHTML = '';
            const marketView = new MarketView(viewContainer);
            marketView.render();
            break;
        case 'builder':
            viewContainer.innerHTML = '';
            builderViewInst.render();
            break;
        case 'game-check':
            viewContainer.innerHTML = '';
            const gameCheckView = new GameCheckView(viewContainer, builderViewInst);
            gameCheckView.render();
            break;
    }
    
    root.appendChild(viewContainer);
}
