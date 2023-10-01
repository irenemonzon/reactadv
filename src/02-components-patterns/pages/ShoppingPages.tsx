import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product={
    id:'1',
    title:'Coffee Mug',
    img:'./coffee-mug.png'
}

const ShoppingPages = () => {
  return (
    <div>
         <h1>Shopping Store</h1>
         <hr/>
         <div style ={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
         }}>
            <ProductCard product={product}>
               < ProductImage/>
               < ProductTitle title={''}/>
               < ProductButtons /> 
             </ProductCard>



         </div>
   

    </div>
   

  )
}

export default ShoppingPages