import {previewData} from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';

// author and categories are references so -> will expand them.
// pipeline then orders the result by createdAt descending order
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

async function HomePage() {
  if (previewData()) {
    return (
      <>
        <PreviewSuspense
          fallback={
            <div role="status">
              <p className='text-center text-lg animate-pulse text-[#7901FA]'>
                Loading Preview Data...
              </p>
            </div>
          }
        >
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </>
    )
  }
  const posts = await client.fetch(query);
  return (
    <>
      <BlogList posts={posts}/>
    </>
  )
}

export default HomePage