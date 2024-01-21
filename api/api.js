import { notFound } from 'next/navigation';

async function getQuote(url) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let res = await fetch(url);
    if (res.ok) {
      let quote = await res.json();
      return quote;
    } else {
      return null;
    }
  } catch (err) {
    throw new Error();
  }
}

export default async function Api() {
  let quote = await getQuote('https://api.quotable.io/random');
  if (!quote) {
    notFound();
  }
  return (
    <div>
      <h2>{quote.content}</h2>
      <p>{quote.author}</p>
    </div>
  );
}
