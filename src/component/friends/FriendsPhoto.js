import React from "react";
import "./style/FriendsPhoto.css";
import { Spacer, User, Grid } from "@nextui-org/react";
import anais from "../../assets/friends/anais.jpg";
import antonela from "../../assets/friends/antonela.jpg";
import gema from "../../assets/friends/gema.jpg";
import isa from "../../assets/friends/isa.jpg";
import jose from "../../assets/friends/jose.jpg";
import miriam from "../../assets/friends/miriam.jpg";
import valentina from "../../assets/friends/valentina.jpg";

const FriendsPhoto = () => {
  return (
    <div className="container">
      <Spacer />
      <Grid.Container gap={2} className="grid">
        <Grid>
          <User src={valentina} name="Valentina" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={isa} name="Isa" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={antonela} name="Antonela" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={gema} name="Gema" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={anais} name="Anais" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={miriam} name="Miriam" size="xl" bordered />
        </Grid>
        <Grid>
          <User src={jose} name="Jose" size="xl" bordered />
        </Grid>
      </Grid.Container>
      <Spacer />
    </div>
  );
};

export default FriendsPhoto;
