const getBestSellers = async () => {
  const response = await fetch("/api/artists/best-sellers");

  return await response.json();
};

export { getBestSellers };
