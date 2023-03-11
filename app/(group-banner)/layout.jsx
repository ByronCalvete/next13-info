const PostLayout = ({ children }) => {
  return (
    <div>
      <marquee style={{ background: 'white', color: 'black' }}>Next.js 13</marquee>
      {children}
    </div>
  )
}

export default PostLayout
