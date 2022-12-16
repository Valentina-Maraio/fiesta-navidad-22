import React from "react";
import "./style/Foods.css";
import { Card, Row, Button, Text, Modal } from "@nextui-org/react";
import huevos from "../../assets/huevos.jpg";
import lasagna from "../../assets/lasagna.jpg";
import postre from "../../assets/postre.jpg";
import bebidas from "../../assets/bebidas.jpg";

const Foods = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [pasta, setPasta] = React.useState(false);
  const handlerPasta = () => setPasta(true);
  const closeHandlerPasta = () => {
    setPasta(false);
  };

  const [drinks, setDrinks] = React.useState(false);
  const handlerDrinks = () => setDrinks(true);
  const closeHandlerDrinks = () => {
    setDrinks(false);
  };

  const [chocolate, setChocolate] = React.useState(false);
  const handlerChocolate = () => setChocolate(true);
  const closeHandlerChocolate = () => {
    setChocolate(false);
  };

  return (
    <>
      <div className="container">
        <div className="entrantes">
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={huevos}
                objectFit="cover"
                width="100%"
                height={140}
                alt="huevos"
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "whitesmoke",
              }}
            >
              <Row wrap="wrap" justify="flex-end" align="center">
                <Button
                  flat
                  auto
                  rounded
                  shadow
                  onClick={handler}
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "black" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ingredients
                  </Text>
                </Button>
                <Modal
                  closeButton
                  blur
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Valentina to
                      <Text b size={18}>
                        NextUI
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <h5>Ingredienti</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </div>

        <div className="primer_plato">
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={lasagna}
                objectFit="cover"
                width="100%"
                height={140}
                alt="lasagna"
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "whitesmoke",
              }}
            >
              <Row wrap="wrap" justify="flex-end" align="center">
                <Button
                  flat
                  auto
                  rounded
                  shadow
                  onClick={handlerPasta}
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "black" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ingredients
                  </Text>
                </Button>
                <Modal
                  closeButton
                  blur
                  aria-labelledby="modal-title"
                  open={pasta}
                  onClose={closeHandlerPasta}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Primer Plato - <b>Lasagna</b>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      <ul>
                        <li>lasagna sheets</li>
                        <li>Carne picada (cerdo, vacuno)</li>
                        <li>Queso (vegano)</li>
                        <li>Salsa de tomate</li>
                        <li>Nueces Moscada</li>
                        <li>Pimienta negra</li>
                        <li>Cebolla</li>
                        <li>Ajo</li>
                      </ul>
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandlerPasta}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </div>

        <div className="dulces">
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={postre}
                objectFit="cover"
                width="100%"
                height={140}
                alt="postre"
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "whitesmoke",
              }}
            >
              <Row wrap="wrap" justify="flex-end" align="center">
                <Button
                  flat
                  auto
                  rounded
                  shadow
                  onClick={handlerChocolate}
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "black" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Options
                  </Text>
                </Button>
                <Modal
                  closeButton
                  blur
                  aria-labelledby="modal-title"
                  open={chocolate}
                  onClose={closeHandlerChocolate}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      <Text b size={18}>
                        Postres
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      <ul>
                        <li>Turrón de chocolate Cream Avellana (con leche)</li>
                        <li>Turrón de coco (sin leche)</li>
                        <li>Trufas clásicas al cacao (con leche)</li>
                      </ul>
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandlerChocolate}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </div>

        <div className="bebidas">
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={bebidas}
                objectFit="cover"
                width="100%"
                height={140}
                alt="bebidas"
              />
            </Card.Body>
            <Card.Footer
              css={{
                justifyItems: "flex-start",
                backgroundColor: "whitesmoke",
              }}
            >
              <Row wrap="wrap" justify="flex-end" align="center">
                <Button
                  flat
                  auto
                  rounded
                  shadow
                  onClick={handlerDrinks}
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "black" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Options
                  </Text>
                </Button>
                <Modal
                  closeButton
                  blur
                  aria-labelledby="modal-title"
                  open={drinks}
                  onClose={closeHandlerDrinks}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      <Text b size={18}>
                        Bebidas
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      <ul>
                        <li>RonMiel</li>
                        <li>Liquor 43</li>
                        <li>Gin</li>
                        <li>Vodca Caramelo</li>
                        <li>Vino blanco</li>
                        <li>Vino tinto</li>
                        <li>CocaCola</li>
                        <li>Sprite</li>
                        <li>Zumo</li>
                      </ul>
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandlerDrinks}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Foods;
