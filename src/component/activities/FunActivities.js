import React from "react";
import "./style/FunActivities.css";
import { Card, Col, Row, Text, Spacer } from "@nextui-org/react";
import santa_secreto from "../../assets/games/santa_secreto.png";
import game_night from "../../assets/games/game_night.png";


const FunActivities = () => {
  return (
    <div className="container">
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={santa_secreto}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Santa Secreto"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text b color="white" size={12}>
                    Santa Secreto
                  </Text>
                  <Text color="white" size={12}>
                    Presupuesto: de 3€ a 5€ (un detallito)
                    <br />
                    El intercambio se realizará en "La Cocina" colocando los
                    nombres de todos en un bowl.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Spacer />
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={game_night}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Game night"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text b color="white" size={12}>
                    Juegos de mesa y mucho más
                  </Text>
                  <Text color="white" size={12}>
                   Como por ejemplo: Uno, The Game, Virus, Cards Against Humanity...
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FunActivities;
