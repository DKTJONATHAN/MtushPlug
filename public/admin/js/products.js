// Product management for admin
document.addEventListener('DOMContentLoaded', function() {
    // Mark as sold functionality
    document.querySelectorAll('.sold-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            if (confirm('Mark this item as sold? It will be removed from the store.')) {
                // In a real app, this would make an API call to update the database
                this.closest('tr').remove();
                
                // Show success message
                alert('Item marked as sold and removed from inventory.');
            }
        });
    });

    // Add product form submission
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const productData = Object.fromEntries(formData.entries());
            
            // In a real app, this would send to your backend
            console.log('Adding product:', productData);
            
            // Show success message and reset form
            alert('Product added successfully!');
            this.reset();
        });
    }
});