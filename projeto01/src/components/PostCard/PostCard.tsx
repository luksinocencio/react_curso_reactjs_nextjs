import styles from './PostCard.module.css'

interface PostCardProps {
  title: string
  cover: string
  body: string
  id: number
}

export function PostCard({ title, cover, body, id }: PostCardProps) {
  return (
    <div className={styles.post}>
      <img src={cover} alt={title} />
      <div className='post-content'>
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  )
}
