const Post = ({ params }) => {
  const { id } = params
  return (
    <h2>This is a post {id}</h2>
  )
}

export default Post
