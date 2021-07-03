import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "max",
    text: "learning react is fun!"
  },
  {
    id: "q2",
    author: "millian",
    text: "learning react is great"
  }
];

const AllQuotes = () => {
  return (
    <section>
      <h2>AllQuotes</h2>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};
export default AllQuotes;
