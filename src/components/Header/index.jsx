import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(props) {
  return (
    <header className='header'>
        <Container>
        <Row className='justify-content-between'>
            <Col xs='auto'>
                <a
                    className='header__link header__title'
                    href='https://www.facebook.com/Datsunbae/'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Datsunbae
                </a>
            </Col>
            <Col xs='auto'>
                <NavLink
                    className='header__link'
                    to='/photos'
                    activeClassName='header__link--active'
                >
                    Photo App
                </NavLink>
            </Col>
        </Row>
        </Container>
    </header>
  )
}

Header.propTypes = {}

export default Header
