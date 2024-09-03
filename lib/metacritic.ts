export async function getInfoGames() {
  const LATEST_GAMES = "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u"

  const rawData = await fetch(LATEST_GAMES)
  const json = await rawData.json()

  const { data: { items } } = json

  return items.map((item: any) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } = item
    const { score } = criticScoreSummary

    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img
    }

  })

}