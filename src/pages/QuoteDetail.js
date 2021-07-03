import React from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
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

const QuoteDetail = () => {
  const Params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === Params.quoteId);
  console.log(quote);
  if (!quote) {
    return <div>Not Found</div>;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <h2>QuoteDetail</h2>
      <p>{Params.quoteId}</p>
    </section>
  );
};
export default QuoteDetail;
