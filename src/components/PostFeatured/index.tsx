import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";


export function PostFeatured() {
  const slug = 'qualquercoisa'
  const postLink = `/post/${slug}`

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        LinkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 820,
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Teste do titulo usando o component
        </PostHeading>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odio fugit debitis voluptatem nisi, nam possimus porro excepturi nemo quibusdam veritatis at pariatur provident sed dolorum quasi, sequi quod asperiores!</p>
      </div>
    </section>
  )
}
