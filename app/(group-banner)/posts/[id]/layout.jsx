import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

const Post = async ({ params, children }) => {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1 style={{ color: '#09f' }}>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

export default Post
