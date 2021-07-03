import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const Params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === Params.quoteId);
  console.log(quote);
  if (!quote) {
    return <div>Not Found</div>;
  }
  console.log(match);
  //match.path and match.url - we will use to get the current url,
  //use match.path on Route tags for defining routes
  //use match.url on Link tags for getting urls
  //useParams(Static) and UseQueryParams(dynamic)
  //we will be use for reading
  //parameters from the query

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          {/* wherever it is required we will call it, but 
         the place where is kept should fall under below tree structure
         of the component  like
         /quotes/${Params.quoteId}/comments
        */}
          {/* <Link className="btn--flat" to={`/quotes/${Params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            LoadComments
          </Link>
        </div>
      </Route>
      <h2>QuoteDetail</h2>
      <p>{Params.quoteId}</p>
      {/* wherever the location is we will place it */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};
export default QuoteDetail;
