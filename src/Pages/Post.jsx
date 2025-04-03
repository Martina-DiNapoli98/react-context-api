import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function Post() {
    const [post, setPost] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data)
            })
            .catch(err => {
                console.error('ERROR', err);
            })
    }, [])
    return (
        <main>
            {
                !post ? ('Loading...') : (
                    <>
                        <section id="post-details" className="mt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="img-fluid" src={`${post.image}`} alt={post.title} />
                                    </div>
                                    <div className="col-7">
                                        <button onClick={() => navigate(-1)} className="back btn btn-info">
                                            <i className="bi bi-arrow-left"></i>
                                        </button>
                                        <h1>{post.title}</h1>
                                        <p>{post.description}</p>
                                        <h4>{post.price}€</h4>
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