const getCuratedArts = async () => {
  const response = await fetch("/api/arts/curation");

  return await response.json();
};

const getAuctions = async () => {
  const response = await fetch("/api/arts/auctions");

  return await response.json();
};

export { getCuratedArts, getAuctions };
