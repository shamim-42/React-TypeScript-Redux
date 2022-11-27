import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CharecterType } from "../../features/rickAndMorty/types";
import Chip from "@mui/material/Chip";
import { FilterCharecterBy, getDarkMood } from "../../features/rickAndMorty/charecterSlice";
import { useSelector } from "react-redux";

interface CardProps {
  character: CharecterType;
}

const LivingStatus: React.FC<{ status: string }> = ({ status }) => {
  if (status.toLowerCase() === "alive") {
    return (
      <div className="cardClip">
        <Chip label="Alive" color="success" />
      </div>
    );
  }

  if (status.toLowerCase() === "dead") {
    return (
      <div className="cardClip">
        <Chip label="Dead" color="error" />
      </div>
    );
  }

  return (
    <div className="cardClip">
      <Chip label="Unknown" color="info" />
    </div>
  );
};

const CharacterCard: React.FC<CardProps> = (props) => {
  const { character } = props;
  const { image, name, location, status } = character;
  const darkMoodStatus = useSelector(getDarkMood);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
      <CardActionArea>
        <LivingStatus status={status} />
        <CardMedia
          component="img"
          height="230"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "transparent" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}>
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}>
            Last Location:
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}>
            {location?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
