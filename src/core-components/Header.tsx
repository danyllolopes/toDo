import Container from '../components/container';
import Icon from '../components/icon';
import Logo from '../assets/icons/logo.svg?react';

const Header = () => {
    return (
        <Container as="header" className="mt-3 md:mt-20">
            <Icon svg={Logo} className='h-9 md:h-12' />
        </Container>
    )
}

export default Header