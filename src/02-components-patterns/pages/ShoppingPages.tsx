import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
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
            <ProductCard 
              product={product}
              className='bg-dark text-white'>
               < ProductImage 
                  className='custom-image'
                />
               < ProductTitle 
                  title={''} 
                />
               < ProductButtons  className='custom-buttons' /> 
             </ProductCard>

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