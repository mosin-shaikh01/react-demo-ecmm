import { Link } from 'react-router-dom';

/**
 * Displays a product card with product information and action controls.
 * @param {Object} product - The product to display.
 * @param {string} product.image - URL of the product image.
 * @param {string} product.name - Name of the product.
 * @param {number} product.price - Price of the product.
 * @param {string|number} product.id - Unique identifier for the product.
 */
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
                        <img src={product.image} alt={product.name} className="product-card-image" />
                        <div className="product-card-content">
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className="product-card-price">${product.price}</p>
                            <div className="product-card-actions">
                                <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
  );
}
