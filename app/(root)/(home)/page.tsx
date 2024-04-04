import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const Questions = [
  // {
  //   id: 1,
  //   title: "How to use tailwindcss",
  //   tags: [
  //     { _id: 1, name: "Tailwindcss" },
  //     { _id: 1, name: "Html" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   ceatedAt: "2022-01-01T12:00:00Z",
  // },
  // {
  //   id: 2,
  //   title: "Best practices for responsive web design",
  //   tags: [
  //     { _id: 2, name: "figma" },
  //     { _id: 3, name: "ui/ux" },
  //   ],
  //   author: "Jane Smith",
  //   upvotes: 15,
  //   views: 120,
  //   answers: 3,
  //   ceatedAt: "2022-01-02T13:00:00Z",
  // },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {Questions.length > 0 ? (
          Questions.map((question) => "Question Card")
        ) : (
          <NoResult
            title="There is no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            href="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
