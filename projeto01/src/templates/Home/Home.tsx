import {ChangeEvent, useCallback, useEffect, useState} from 'react'

import styles from './Home.module.css'

import { Button } from '../../components/Button/Button'

import {PostProps, Posts} from '../../components/Post/Posts'
import { TextInput } from '../../components/TextInput/TextInput'
import { loadPosts } from '../../utils/load-posts'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(2)
  const [searchValue, setSearchValue] = useState('')

  const handleLoadPosts = useCallback(
    async (page: number, postsPerPage: number) => {
      const postsAndPhotos = await loadPosts()

      setPosts(postsAndPhotos.slice(page, postsPerPage))
      setAllPosts(postsAndPhotos)
    },
    []
  )

  useEffect(() => {
    // console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPosts = searchValue
    ? allPosts.filter((post: PostProps) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  return (
    <section className={styles.container}>
      <div className={styles.searchContainer}>
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

      <div className={styles.buttonContainer}>
        {!searchValue && (
          <Button
            text='Load more posts'
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  )
}
