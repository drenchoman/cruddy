export default function Item({ params }) {
  return (
    <>
      <h1>Hello from {params.id}</h1>
      <p>I am an item</p>
    </>
  );
}
