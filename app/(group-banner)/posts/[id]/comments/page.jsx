import Image from 'next/image'

const fetchCommentsPost = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // throw new Error('Error with comments') // Simulating error
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

const Comments = async ({ params }) => {
  const { id } = params
  const comments = await fetchCommentsPost(id)

  return (
    <ul style={{ listStyle: 'none', backgroundColor: '#444', fontSize: '12px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default Comments
