import Container from 'react-bootstrap/Container';
import choose from '../chooseUs/choose.svg'


const ChooseUs = () => {
    return (
        <>
            <Container fluid className='container-choose-section'>
                <div className="d-flex justify-content-end">
                    <div className='text-section-two'>
                        <p className='text-choose-section'>Why Choose Us?</p>
                        <p className='text-choose-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    </div>
                    <img
                        src={choose}
                        width="600"
                        height="500"
                        className="d-inline-block align-top image-choose"
                        alt="HomepageImage"
                    />
                </div>
            </Container>
        </>
    );
};

export default ChooseUs;