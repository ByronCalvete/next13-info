import Counter from './Counter'

const PostLayout = ({ children }) => {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}

export default PostLayout
