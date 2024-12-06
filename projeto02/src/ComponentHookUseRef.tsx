import { useEffect, useMemo, useState } from 'react'

interface ComponentHookUseRefProps {}

interface PostProps {
  id: number
  title: string
  body: string
}

function Post({ post }: { post: PostProps }) {
  console.log('Filho renderizou')
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export function ComponentHookUseRef({}: ComponentHookUseRefProps) {
  const [posts, setPosts] = useState([])
  const [value, setVale] = useState('')

  console.log('Pai renderizou')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Hello UseRef</h1>
      <p>
        <input type="search" value={value} onChange={e => setVale(e.target.value)} />
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post: PostProps) => <Post key={post.id} post={post} />)
      }, [posts])}
    </div>
  )
}
