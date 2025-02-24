import Layout from "../../components/Layout"
import Card from "../../components/Card"
import { useEffect, useState } from "react"

function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
      
      console.log(items)

  }, [])

  return (
      <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {items?.map(item=>(
              <Card key={item.id} data={item}/>
            ))} 
          </div>
      </Layout>
  )
}

export default Home
