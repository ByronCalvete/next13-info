import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  // return fetch('https://jsonplaceholder.typicode.com/posts') // Static fetch
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }) // Server side fetching. Only server do the fetch
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  }) // Incremetnal static generation. Every 10 seconds do a fetch to revalidate static files. This is a better option than static fetch
    .then(res => res.json())
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}

export default ListOfPosts
