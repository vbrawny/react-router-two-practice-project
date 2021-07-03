import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";
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
      <Route path={`/quotes/${Params.quoteId}`} exact>
        <div className="centered">
          {/* wherever it is required we will call it, but 
         the place where is kept should fall under below tree structure
         of the component  like
         /quotes/${Params.quoteId}/comments
        */}
          <Link className="btn--flat" to={`/quotes/${Params.quoteId}/comments`}>
            LoadComments
          </Link>
        </div>
      </Route>
      <h2>QuoteDetail</h2>
      <p>{Params.quoteId}</p>
      {/* wherever the location is we will place it */}
      <Route path={`/quotes/${Params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};
export default QuoteDetail;
