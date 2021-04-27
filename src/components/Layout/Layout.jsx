import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import './Layout.css'


const Layout = (props) => {
    return ( 

        <Wrapper>

            <div>
                navigation in Layout in components
            </div>

            <main>
                {props.children}
            </main>


        </Wrapper>
     );
}
 
export default Layout;