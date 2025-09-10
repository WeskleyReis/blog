import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsLists } from '@/components/PostsLists';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
      <Container>
        <Header/>

        <Suspense fallback={<SpinLoader />}>
          <PostFeatured />
        </Suspense>
        
        <Suspense fallback={<SpinLoader />}>
          <PostsLists />
        </Suspense>
    </Container>
  );
}
