import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function product() {
    const [product, setproduct] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setproduct(data)
            })
            .catch(err => {
                console.error('ERROR', err);
            })
    }, [])
    return (
        <main>
            {
                !product ? ('Loading...') : (
                    <>
                        <section id="product-details" className="mt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="img-fluid" src={`${product.image}`} alt={product.title} />
                                    </div>
                                    <div className="col-7">
                                        <button onClick={() => navigate(-1)} className="back btn btn-info">
                                            <i className="bi bi-arrow-left"></i>
                                        </button>
                                        <h1>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <h4>{product.price}€</h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </main>
    )
}