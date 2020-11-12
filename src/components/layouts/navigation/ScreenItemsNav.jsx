import React from 'react';

// react-bootstrap
import { Nav } from 'react-bootstrap';

// react-fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faCreditCard, faHome, faSignOutAlt, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const ItemsNav = ({ history }) => {

    const handleLogout = () => {
        history.push('/');
    }

    return (
        <>
            <Nav className='mr-auto'>
                <Nav.Link href='/main'>
                    <FontAwesomeIcon
                        icon={faHome}
                    /> Main
                </Nav.Link>

                <Nav.Link href='/my-account'>
                    <FontAwesomeIcon
                        icon={faUser}
                    /> My account
                </Nav.Link>

                <Nav.Link href='/parking'>
                    <FontAwesomeIcon
                        icon={faParking}
                    /> Parking
                </Nav.Link>

                <Nav.Link href='/renting'>
                    <FontAwesomeIcon
                        icon={faCreditCard}
                    /> Renting
                </Nav.Link>

                <Nav.Link href='/contact'>
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                    /> Contact
                </Nav.Link>
            </Nav>

            <Nav className='ml-auto'>
                <Nav.Link
                    onClick={handleLogout}
                >
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                    /> Sign out
                </Nav.Link>
            </Nav>
        </>
    )
}

export default ItemsNav;
