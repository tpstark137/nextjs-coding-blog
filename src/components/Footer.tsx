"use client";
import { Icons } from "./icons";
import Link from "next/link";
import { POSTS } from "@/lib/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import { createSubscriber } from "@/lib/newsletter";

export default function Footer() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-1">
      <div className="container mx-auto p-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-md font-semibold">CoderPaul-Blogs</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay up to date with the latest news and insights from my blog.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter
                  className="h-6 w-6 text-gray-500 hover:text-gray-700
                 dark:text-gray-400 dark:hover:text-gray-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icons.linkedin
                  className="h-6 w-6 text-gray-500 hover:text-gray-700
                 dark:text-gray-400 dark:hover:text-gray-300"
                />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.href}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms and Condition
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  defaultValue=""
                  aria-describedby="email-error"
                />
                <Button>Subscribe</Button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p key={error} className="text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 CoderPaul-Blogs . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
