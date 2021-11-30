import React from 'react';
import styled from 'styled-components'
function Loader(props) {
    return (
        <LoaderContent className="progress">
                <div className="indeterminate"></div>
        </LoaderContent>
    );
}
const LoaderContent = styled.div`
  
`
export default Loader;