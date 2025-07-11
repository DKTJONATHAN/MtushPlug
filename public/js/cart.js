// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const emptyCartDiv = document.getElementById('empty-cart');
    const cartItemsDiv = document.getElementById('cart-items');
    
    // Show empty cart message if no items
    if (cartItems.length === 0) {
        emptyCartDiv.classList.remove('hidden');
        cartItemsDiv.classList.add('hidden');
    } else {
        emptyCartDiv.classList.add('hidden');
        cartItemsDiv.classList.remove('hidden');
        // Render cart items here
    }

    // Quantity adjust buttons
    document.querySelectorAll('.quantity-adjust').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (this.classList.contains('decrease') && value > 1) {
                input.value = value - 1;
            } else if (this.classList.contains('increase')) {
                input.value = value + 1;
            }
            
            // Update cart total
            updateCartTotal();
        });
    });

    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            // Remove item from cart array
            // Update localStorage
            // Re-render cart
        });
    });

    function updateCartTotal() {
        // Calculate and update cart total
    }
});