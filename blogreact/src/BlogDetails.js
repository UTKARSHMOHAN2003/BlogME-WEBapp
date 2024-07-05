import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch1 from './useFetch1';

function BlogDetails() {
    const{id}=useParams();
    const {data : Blog,error,isPending  }=useFetch1('http://localhost:8000/blog/'+id)
  return (
    <div>
      <h2>blog details-{id}</h2>
      {isPending&&<div>loading...</div>}
      {error && <div>{error}</div>}
      {
        Blog&&(
          <article>
            <h2>{Blog.title}</h2>
            <p>written by{Blog.author}</p>
            <div>{Blog.body}</div>
          </article>
        )
      }
    </div>
  )
}

export default BlogDetails
