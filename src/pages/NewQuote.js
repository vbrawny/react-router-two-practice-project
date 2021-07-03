import React from "react";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <section>
      <h2>NewQuote</h2>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};
export default NewQuote;
