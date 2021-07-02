import React from "react";
import { useParams } from "react-router-dom";
const QuoteDetail = () => {
  const Params = useParams();
  return (
    <section>
      <h2>QuoteDetail</h2>
      <p>{Params.quoteId}</p>
    </section>
  );
};
export default QuoteDetail;
