import { useEffect, useState } from 'react';
import '../components/calculator.css';

const FetchTheQuote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quoteResponse, setQuoteResponse] = useState([]);

  useEffect(() => {
    const category = 'fitness';
    const quoteApi = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'LueHXWPUz4CT1CODFzAgTg==PD8ERwudMMfqO02j';
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(quoteApi,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': apiKey,
            },
          });
        const data = await response.json();
        setQuoteResponse(data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    getQuote();
  }, [setIsLoading, setError]);

  if (isLoading) return <h1> The Quote is Loading</h1>;
  if (error) return <h1> Some error has occurred!</h1>;

  return (
    <div className="quote">
      {quoteResponse.map((quotes) => (
        <div key={quotes.quote}>
          {quotes.quote}
          <em className="author">
            {quotes.author}
          </em>
          {' '}

        </div>
      ))}
    </div>
  );
};

export default FetchTheQuote;
