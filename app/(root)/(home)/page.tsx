import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";
import React from "react";

// const Questions = [
//   {
//     _id: "1", // Changed to string
//     title: "How to use tailwindcss",
//     tags: [
//       { _id: "1", name: "Tailwindcss" }, // Changed _id to string
//       { _id: "2", name: "Html" }, // Changed _id to string
//     ],
//     author: {
//       _id: "1", // Changed to string
//       name: "John Doe",
//       picture: "url/to/picture", // Added a placeholder value for picture
//     },
//     upvotes: 14,
//     views: 100,
//     answers: [],
//     createdAt: new Date("2024-04-01T12:00:00Z"), // Corrected typo in createdAt and converted string to Date object
//   },
//   {
//     _id: "2", // Changed to string
//     title: "Best practices for responsive web design",
//     tags: [
//       { _id: "3", name: "figma" }, // Changed _id to string
//       { _id: "4", name: "ui/ux" }, // Changed _id to string
//     ],
//     author: {
//       _id: "2", // Changed to string
//       name: "Jane Smith",
//       picture: "url/to/picture", // Added a placeholder value for picture
//     },
//     upvotes: 15,
//     views: 120,
//     answers: [],
//     createdAt: new Date("2024-03-02T13:00:00Z"), // Corrected typo in createdAt and converted string to Date object
//   },
// ];

const Home = async () => {
  const result = await getQuestions({});
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
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
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
