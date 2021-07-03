import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";

import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
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
  // this will help useEffect to write only when  quoteId changes in params
  //rather than useEffect activating for all params.
  const { quoteId } = Params;
  //const quote = DUMMY_QUOTES.find((quote) => quote.id === Params.quoteId);
  //IMP - SIMILAR kind of implementation inside project.
  const { sendRequest, status, loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }

  // if (status === "completed" && !loadedQuote) {
  //   return <NoQuotesFound />;
  // }

  if (!loadedQuote.text) {
    //IMP -  we can use this for the "empty value inside our Project"
    return <p>No Quote Found </p>;
  }

  // console.log(quote);
  // if (!quote) {
  //   return <div>Not Found</div>;
  // }
  console.log(match);
  //match.path and match.url - we will use to get the current url,
  //use match.path on Route tags for defining routes
  //use match.url on Link tags for getting urls
  //useParams(Static) and UseQueryParams(dynamic)
  //we will be use for reading
  //parameters from the query

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
