export async function getProducts() {
  try {
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();
    return products;
  } catch (error) {
    return { message: 'Something went wrong' };
  }
}
