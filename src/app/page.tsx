import LatestPosts from "@/components/home/latest-posts";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </>
  );
}
