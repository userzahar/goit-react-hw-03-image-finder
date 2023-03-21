import { ThreeDots } from  'react-loader-spinner';
import { Div } from './Loader.styled';

export function Loader() {
    return (
        <Div>
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#3f51b5" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </Div>
    );
};