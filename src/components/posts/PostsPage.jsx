import PostsList from './PostsList'
import PostContext from '../../context/PostContext'
import { useContext } from 'react'

export default function PostsPage() {
    const { products } = useContext(PostContext)
    return (
        <>
            <section>
                <div className="container">
                    <h2>
                        Products
                    </h2>
                    <PostsList products={products} />
                </div>
            </section>
        </>
    )
}