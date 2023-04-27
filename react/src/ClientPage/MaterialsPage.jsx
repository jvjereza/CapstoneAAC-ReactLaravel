import React, { useState } from 'react';
import './MaterialsPage.css'
import { Container, Carousel, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const P2500 = '₱2500';
const P3000 = '₱3000';

const MaterialsPage = () => {
  const [index, setIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  
  const handleCheckout = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    navigate('/payment', { state: { cartItems, totalPrice } });
  };
  

  const products = [
    {
      id: 1,
      name: 'Black',
      image: 'img/Black.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 2,
      name: 'Beamount Oak',
      image: 'img/Beamount oak.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 3,
      name: 'White',
      image: 'img/White.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 4,
      name: 'Gray',
      image: 'img/Gray.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 5,
      name: 'Light Apple',
      image: 'img/5a.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 6,
      name: 'Wallnut',
      image: 'img/6a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 7,
      name: 'Bamboo',
      image: 'img/12a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },
    {
      id: 8,
      name: 'Light Apple',
      image: 'img/14a.PNG',
      description: 'Marine laminated board',
      price: P2500,
    },
    {
      id: 9,
      name: 'Bamboo Gray',
      image: 'img/13a.PNG',
      description: 'Marine laminated board',
      price: P3000,
    },

  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <><div id="mat" className="offset">
          <Container className="text-center">
              <div className="narrow">
                  <h1 className="heading"><strong>MATERIALS</strong></h1>
                  <p>Marine-grade plywood, often simply called marine plywood, is not what it is often claimed to be.
                      It is a good-quality, hardwood plywood made with waterproof glue, but since it is not treated with chemicals,
                      it is not rot-resistant. Better grades also tend to be lightweight, strong, and virtually free of defects.
                      These qualities are what make this plywood a popular choice for building </p>
              </div>
              <Carousel activeIndex={index} onSelect={handleSelect} id="myCarousel">
                  <Carousel.Item>
                      <img src="img/Beamount oak.PNG" alt="Beamount Oak" />
                      <Carousel.Caption>
                          <p>Beamount Oak</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="img/Sonoma Oak.PNG" alt="Sonoma Oak" />
                      <Carousel.Caption>
                          <p>Sonoma Oak</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="img/Gray.PNG" alt="Gray" />
                      <Carousel.Caption>
                          <p>Gray</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="img/White.PNG" alt="White" />
                      <Carousel.Caption>
                          <p>White</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="img/Black.PNG" alt="Black" />
                      <Carousel.Caption>
                          <p>Black</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </Container>
      </div><div className="BuyMaterialsPage">
              <header style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                  <h1>AAC Material Shopping</h1>
                  <div className="cart-box" style={{ marginLeft: "auto", marginTop: "15px" }}>
                      <div className="cart-icon" onClick={toggleCart}>
                          <FontAwesomeIcon icon={faCartArrowDown} size="2x" />
                          <span className="cart-items">{cartItems.length}</span>
                      </div>

                      <div className={`whole-cart-window ${showCart ? '' : 'hide'}`}>
                          <div className="cart-wrapper">
                              <h2>Shopping Cart</h2>
                              {cartItems.length === 0 ? (
                                  <p>Your cart is empty.</p>
                              ) : (
                                  <ul>
                                      {cartItems.map((item) => (
                                          <li key={item.id}>
                                              <span>{item.name}</span>
                                              <span>{item.price}</span>
                                              <button onClick={() => handleDelete(item.id)}>Delete</button>
                                          </li>
                                      ))}
                                  </ul>
                              )}
                          </div>
                          <Button className='checkout' onClick={handleCheckout} style={{ marginBottom: "15px" }}>Checkout</Button>
                      </div>
                  </div>
              </header>

              <section className="shop-section">
                  <Container>
                      <Row>
                          {products.map((product) => (
                              <Col key={product.id}>
                                  <Card style={{ width: '18rem' }}>
                                      <Card.Img variant="top" src={product.image} />
                                      <Card.Body>
                                          <Card.Title>{product.name}</Card.Title>
                                          <Card.Text>{product.description}</Card.Text>
                                          <Card.Text>{product.price}</Card.Text>
                                          <Button className='addtocart' variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          ))}
                      </Row>
                  </Container>
              </section>
          </div></>
    
  );
};

export default MaterialsPage;
