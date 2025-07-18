// Global variables
let progressData = JSON.parse(localStorage.getItem('mathLearnProgress')) || {};
let totalTopics = 20;

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const tableSelect = document.getElementById('tableSelect');
const multiplicationTable = document.getElementById('multiplicationTable');
const squareRootsTable = document.getElementById('squareRootsTable');
const cubeRootsTable = document.getElementById('cubeRootsTable');
const progressCheckboxes = document.querySelectorAll('input[type="checkbox"][data-topic]');
const resetProgressBtn = document.getElementById('resetProgress');
const collapsibleContents = document.querySelectorAll('.collapsible-content');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTables();
    initializeProgress();
    initializeSearch();
    populateTableSelector();
    initializeCollapsibleContent();
    updateProgressDisplay();
});

// Navigation functionality
function initializeNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Table generation functions
function populateTableSelector() {
    const select = document.getElementById('tableSelect');
    select.innerHTML = '';
    
    for (let i = 2; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Table of ${i}`;
        select.appendChild(option);
    }
    
    select.addEventListener('change', function() {
        generateMultiplicationTable(parseInt(this.value));
    });
    
    // Generate default table
    generateMultiplicationTable(2);
}

function generateMultiplicationTable(number) {
    const table = document.getElementById('multiplicationTable');
    table.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('div');
        item.className = 'table-item';
        item.innerHTML = `${number} × ${i} = ${number * i}`;
        table.appendChild(item);
    }
}

function generateSquareRootsTable() {
    const table = document.getElementById('squareRootsTable');
    table.innerHTML = '';
    
    for (let i = 1; i <= 50; i++) {
        const item = document.createElement('div');
        item.className = 'table-item';
        item.innerHTML = `√${i} = ${Math.sqrt(i).toFixed(3)}`;
        table.appendChild(item);
    }
}

function generateCubeRootsTable() {
    const table = document.getElementById('cubeRootsTable');
    table.innerHTML = '';
    
    for (let i = 1; i <= 50; i++) {
        const item = document.createElement('div');
        item.className = 'table-item';
        item.innerHTML = `∛${i} = ${Math.cbrt(i).toFixed(3)}`;
        table.appendChild(item);
    }
}

function initializeTables() {
    generateSquareRootsTable();
    generateCubeRootsTable();
}

// Progress tracking functionality
function initializeProgress() {
    progressCheckboxes.forEach(checkbox => {
        const topic = checkbox.getAttribute('data-topic');
        
        // Set checkbox state from stored data
        if (progressData[topic]) {
            checkbox.checked = true;
        }
        
        // Add event listener for changes
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                progressData[topic] = {
                    completed: true,
                    date: new Date().toISOString()
                };
            } else {
                delete progressData[topic];
            }
            
            saveProgress();
            updateProgressDisplay();
        });
    });
    
    // Reset progress button
    resetProgressBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all progress?')) {
            progressData = {};
            saveProgress();
            progressCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            updateProgressDisplay();
        }
    });
}

function saveProgress() {
    localStorage.setItem('mathLearnProgress', JSON.stringify(progressData));
}

function updateProgressDisplay() {
    const completedCount = Object.keys(progressData).length;
    const progressPercentage = Math.round((completedCount / totalTopics) * 100);
    
    // Update hero section stats
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
    
    // Update progress section
    document.getElementById('progressText').textContent = `${progressPercentage}%`;
    document.getElementById('completedTopics').textContent = completedCount;
    document.getElementById('totalTopics').textContent = totalTopics;
    
    // Update progress circle
    const circle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 65;
    const offset = circumference - (progressPercentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Update completed topics list
    updateCompletedTopicsList();
}

function updateCompletedTopicsList() {
    const completedList = document.getElementById('completedList');
    completedList.innerHTML = '';
    
    Object.keys(progressData).forEach(topic => {
        const item = document.createElement('div');
        item.className = 'completed-item';
        item.innerHTML = `
            <span>${formatTopicName(topic)}</span>
            <small>${new Date(progressData[topic].date).toLocaleDateString()}</small>
        `;
        completedList.appendChild(item);
    });
    
    if (Object.keys(progressData).length === 0) {
        completedList.innerHTML = '<p>No topics completed yet. Start learning!</p>';
    }
}

function formatTopicName(topic) {
    return topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === '') return;
        
        // Simple search implementation
        const topics = document.querySelectorAll('.topic-card h3');
        let found = false;
        
        topics.forEach(topic => {
            if (topic.textContent.toLowerCase().includes(query)) {
                topic.scrollIntoView({ behavior: 'smooth' });
                topic.parentElement.style.border = '2px solid #667eea';
                setTimeout(() => {
                    topic.parentElement.style.border = 'none';
                }, 3000);
                found = true;
                return;
            }
        });
        
        if (!found) {
            alert('No topics found matching your search. Try different keywords.');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Additional utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lazy loading for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all topic cards
document.querySelectorAll('.topic-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav item
document.querySelectorAll('.nav-menu .nav-item').forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        navMenu.classList.contains('active') && 
        !navToggle.contains(e.target) && 
        !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Add mobile menu styles
const mobileMenuStyle = document.createElement('style');
mobileMenuStyle.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 80px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: flex-start;
            padding: 2rem;
            transition: right 0.3s ease;
        }
        
        .nav-menu.active {
            right: 0;
        }
    }
`;
document.head.appendChild(mobileMenuStyle);

// Performance monitoring
let performanceMetrics = {
    loadTime: 0,
    interactionCount: 0
};

window.addEventListener('load', function() {
    performanceMetrics.loadTime = performance.now();
    console.log(`Page loaded in ${performanceMetrics.loadTime}ms`);
});

// Track user interactions
document.addEventListener('click', function() {
    performanceMetrics.interactionCount++;
});

// Auto-save progress periodically
setInterval(function() {
    if (Object.keys(progressData).length > 0) {
        saveProgress();
    }
}, 30000); // Save every 30 seconds

// Initialize collapsible content
function initializeCollapsibleContent() {
    collapsibleContents.forEach(content => {
        const summary = content.querySelector('.content-summary');
        const details = content.querySelector('.content-details');
        
        // Handle click on summary to toggle details
        summary.addEventListener('click', function() {
            content.classList.toggle('active');
        });
        
        // Prevent click events from propagating from content details
        if (details) {
            details.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
}

// Initialize theme preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    document.body.classList.add('dark-theme');
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Add service worker for offline functionality
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered:', registration))
        .catch(error => console.log('SW registration failed:', error));
}

