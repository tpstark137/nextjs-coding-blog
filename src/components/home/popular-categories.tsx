import { Button } from "../ui/button";
import Link from "next/link";
import { categories } from "@/lib/popularpost-data";

export default function PopularCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,2fr))] gap-2">
      {categories.map((post) => (
        <Button
          key={post}
          variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={post}>{post}</Link>
        </Button>
      ))}
    </div>
  );
}
