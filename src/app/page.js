import Card from "./components/Card";
const fetchData = async () => {
  const fetchedData = await fetch("http://localhost:3000/api/recipe", {
    cache: "no-cache",
  });
  if (!fetchedData.ok) {
    throw new Error("data cannot be fetched");
  }
  return fetchedData.json();
};

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <div className="flex flex-wrap">
        {data.map((recipe) => {
          return <Card key={recipe?.id} recipe={recipe} />;
        })}
      </div>
    </>
  );
}
