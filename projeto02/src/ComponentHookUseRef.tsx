import { useEffect, useMemo, useRef, useState } from 'react'

interface ComponentHookUseRefProps {}

interface PostProps {
  id: number
  title: string
  body: string
  handleClick: (value: string) => void
}

interface PostComponentProps {
  post: PostProps
  handleClick: (args: string) => void
}

function Post({ post, handleClick }: PostComponentProps) {
  return (
    <div>
      <h3 onClick={() => handleClick(post.title)}>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export function ComponentHookUseRef({}: ComponentHookUseRefProps) {
  const [posts, setPosts] = useState([])
  const [value, setVale] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [value])

  function handleClick(value: string) {
    setVale(value)
  }

  return (
    <div>
      <h1 style={{ fontSize: '10px' }}>Hello UseRef</h1>
      <p>
        <input type="search" ref={inputRef} value={value} onChange={e => setVale(e.target.value)} />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post: PostProps) => <Post key={post.id} post={post} handleClick={handleClick} />)
        )
      }, [posts])}
    </div>
  )
}
