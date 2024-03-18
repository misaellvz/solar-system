export async function getStaticProps() {
  const apiKey = process.env.NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      spaceImage: data,
    },
  };
}