import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Link href="https://zenstationnext.vercel.app/" className="block md:inline-block text-center md:text-left text-sm md:text-base font-medium tracking-wider uppercase transition duration-300 hover:text-gray-900" title="Visit Spectrum Station Life">
     Check out Life 103 for our cooking class!
   </Link>
      </Container>
    </main>
  );
}
