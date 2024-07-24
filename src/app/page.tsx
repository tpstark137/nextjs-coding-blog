import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { NavBar } from "@/components/navbar";
import PopularCategories from "@/components/home/popular-categories";
import PopularPosts from "@/components/home/popular-post";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <main className="flex flex-col items-start justify-evenly mt-6 md:flex-row ">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">Popular Categories</h1>
            <PopularCategories />
          </div>
          <div className="sticky mt-10 top-0">
            <h1 className="font-bold mb-4">Popular Posts</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
