import TODOCardList from "./components/TODOCardList";

async function getTodoAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  })

  const todoAllData: TODOData[] = await response.json()
  return todoAllData  
}

export default async function Home() {
  const todoAllData = await getTodoAllData()

  return (
    <main>
      <TODOCardList todoAllData={todoAllData}/>
    </main>
  );
}
