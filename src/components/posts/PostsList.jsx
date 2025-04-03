import { Link } from "react-router-dom"
export default function PostsList({ products }) {
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                {
                    products.map(product => (
                        <div className="col d-flex" key={product.id}>
                            <div className="card m-4">
                                <img className="img-top" src={product.image} alt={product.title} />
                                <div className="card-body">
                                    <h4>
                                        {product.title}
                                    </h4>
                                </div>
                                <Link className="btn btn-primary" to={`/posts/${product.id}`}>Buy Now</Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}