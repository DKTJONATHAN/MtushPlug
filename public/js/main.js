// Main JavaScript for the frontend
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cart count update (example)
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        // This would normally come from your cart system
        const count = localStorage.getItem('cartCount') || 0;
        if (count > 0) {
            cartCount.textContent = count;
            cartCount.classList.remove('hidden');
        }
    }
});