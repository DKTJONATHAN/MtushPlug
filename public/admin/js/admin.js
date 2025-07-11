// Admin panel main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu (if needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Logout button
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear admin auth and redirect
            localStorage.removeItem('adminAuth');
            window.location.href = '../admin/login.html';
        });
    }
});