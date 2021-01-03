import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import {useEffect} from "react"

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}
export default function Home({ posts }) {
  useEffect(()=>{
    console.log(posts)
  })
  return (
    <Layout home>
     <h2>Posts</h2>
    { posts.map((post)=>(
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>
      ))}
    </Layout>
  )
}