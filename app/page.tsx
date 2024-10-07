import React from "react";
import Link from "next/link";
import { contents } from "@/constant";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-700 to-stone-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Welcome to CSS Fundamental Review
        </h1>
        <div className="space-y-8">
          {contents.map((content) => (
            <div
              key={content.content_Title}
              className="overflow-hidden rounded-lg bg-stone-800 shadow-md"
            >
              <h2 className="flex items-center p-6 text-2xl font-semibold text-white transition duration-150 hover:bg-stone-900">
                <BookOpenIcon className="mr-2 size-6" />
                {content.content_Title}
              </h2>
              <ul className="divide-y divide-gray-200">
                {content.subcontents.map((link) => (
                  <li key={link.subcontent_Title}>
                    <Link
                      href={link.subcontent_link}
                      className="block px-6 py-4 text-white transition duration-150 hover:bg-stone-900"
                    >
                      <span className="text-white">
                        {link.subcontent_Title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
