"use client";

import { popularPosts } from "@/lib/popularpost-data";
import { Icons } from "../icons";
import Link from "next/link";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts?.map((post: { title: string }) => (
        <Link href={`/blog/`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
