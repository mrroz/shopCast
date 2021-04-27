import './Builder.css';
import '../../../../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import {Alert} from 'react-bootstrap'


const Builder = (prpos) => {
    return (  

        <div className='builder'>
            <div>{prpos.title}</div>
            <button onClick={prpos.add}>Add</button>
            <button onClick={prpos.remove} >Remove</button>
            <Alert variant='info' className='alert'>
                محصول شماره :{prpos.index}
            </Alert>

        </div>
    );
}
 
export default Builder;