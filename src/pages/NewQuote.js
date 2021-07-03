import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return (
    <section>
      <h2>NewQuote</h2>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};
export default NewQuote;
