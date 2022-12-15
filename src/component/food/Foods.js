import React from "react";
import "./style/Foods.css";
import { Card } from "@nextui-org/react";

const Foods = () => {
  const menu = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
  ];

  return (
    <>
      <div className="container">
        {menu.map((item, index) => (
          <div>
            <h3>{item.title}</h3>
            <div key={index}>
              <Card isPressable>
                <Card.Body>
                  <Card.Image
                    src={"https://nextui.org" + item.img}
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foods;
