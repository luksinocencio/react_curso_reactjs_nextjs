import './styles.css'

import { PostCard } from '../PostCard'

interface PostProps {
  title: string
  body: string
  id: number
  cover: string
}

interface PostsProps {
  posts: PostProps[]
}

export function Posts({ posts = [] }: PostsProps) {
  return (
    <div className='posts'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </div>
  )
}
