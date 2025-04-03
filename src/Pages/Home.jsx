import { useContext } from "react"
import PostContext from '../context/PostContext'
import PostsList from '../components/posts/PostsList'
export default function Home() {
    const { products } = useContext(PostContext)
    return (
        <>

            <main>
                <section>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">REACT ROUTERS</h1>
                            <p className="col-md-8 fs-4">
                                Using a series of utilities, you can create this jumbotron, just
                                like the one in previous versions of Bootstrap. Check out the
                                examples below for how you can remix and restyle it to your liking.
                            </p>
                            <button className="btn btn-primary btn-lg" type="button">
                                Example button
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <h2>
                            Best Products
                        </h2>
                        <PostsList products={products.slice(0, 3)} />
                    </div>
                </section>
            </main>

        </>
    )
}