import { Box, Card, CardContent, Button, Typography, CardActions, CardActionArea, CardMedia } from "@mui/material";


function CardComponent({ properties, closeObject, geometry }) {
    const card = (
        <>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image="\src\assets\react.svg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {properties.class}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Kingdom: {properties.kingdom} <br />
                        Phylum: {properties.phylum}<br />
                        Location: {properties.country} - {properties.state} <br />
                        {geometry && <strong>Coordinates:{geometry[0]} , {geometry[1]}</strong>}
                    </Typography>
                </CardContent>
                {closeObject.isClosable && <CardActions>
                    <Button size="small" onClick={closeObject.onClose}>Close</Button>
                </CardActions>}
            </CardActionArea>
        </>
    )
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
export default CardComponent;