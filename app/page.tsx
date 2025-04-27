import TODOCardList from "./components/TODOCardList";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  })

  const todoAllData = await response.json()
  console.log(todoAllData)

  return (
    <main>
      <TODOCardList />
    </main>
  );
}
