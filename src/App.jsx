import Card from "./Card"
import productData from "./assets/resources/CardData"

function App() {
  

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">

      {productData.map((product) => (
        <Card className="mx-auto w-72"
        image={product.image}
              name={product.name}
              price={product.price}
              desc={product.desc}
              id={product.id}
        />
      ))}

  </div>
    </div>
  )
}

export default App
