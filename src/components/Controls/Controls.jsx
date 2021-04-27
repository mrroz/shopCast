import './Controls.css'
import Builder from './Builder/Builder'

const products = [
    {title :'Product 1', type:'Product1'},
    {title :'Product 2', type:'Product2'},
    {title :'Product 3', type:'Product3'},
    {title :'Product 4', type:'Product4'},
]

const Controls = (props) => {
    return ( 
        <div className='controls'>

            <div>
                <p>totalprice : {props.price}</p>
            </div>

            {products.map((item,index)=>{
                
                return <Builder
                
                index={index+1}
                 key={item.title}
                  title={item.title}
                   add={()=>props.productAdd(item.type)}
                   remove={()=>props.productRemove(item.type)}
                   
                   />

            })}


        </div>
     );
}
 
export default Controls
