import Head from 'next/head'
import {PostCard,Categories,PostWidget}from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';
import{getPosts} from '../services' 
//import {FeaturedPosts} from '../sections'
// demo title 

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <FeaturedPosts/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
<div className='grid grid-cols lg:grid-cols-12 gap-12'>
<div className="lg:col-span-8 col-span-1">
{posts.map((post)=> <PostCard post ={post.node} key ={post.title}/>

)}
</div>
<div className="lg:col-span-4 col-span-1">
<div classname="lg:sticky relative top-8">

<PostWidget/>
<Categories/>
</div>

</div>

    </div>
    </div>
  )
}
// new function get states from
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}
