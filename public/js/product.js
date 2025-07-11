// Product page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Image gallery
    const mainImage = document.querySelector('.main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.getAttribute('src').replace('-thumbnail', '');
            mainImage.setAttribute('src', newSrc);
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('border-green-500'));
            this.classList.add('border-green-500');
        });
    });

    // Size selection
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(o => o.classList.remove('bg-green-100', 'border-green-500'));
            this.classList.add('bg-green-100', 'border-green-500');
        });
    });

    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Get product details
            const product = {
                id: this.getAttribute('data-product-id'),
                name: document.querySelector('.product-name').textContent,
                price: parseFloat(document.querySelector('.product-price').textContent.replace('KSh ', '')),
                size: document.querySelector('.size-option.bg-green-100')?.textContent || 'Not specified',
                image: mainImage.getAttribute('src'),
                quantity: parseInt(document.querySelector('.quantity-input').value) || 1
            };
            
            // Add to cart in localStorage
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // Update cart count
            localStorage.setItem('cartCount', cartItems.length);
            
            // Show success message
            alert(`${product.name} has been added to your cart!`);
        });
    }
});