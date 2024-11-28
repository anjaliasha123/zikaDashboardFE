import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CardComponent from './CardComponent';

function ListCard({ list, isCloseable, onClose }) {
    const closeObject = {
        isCloseable,
        onClose
    };
    
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {list.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <CardComponent properties={item.properties} closeObject={closeObject} geometry={item.geometry.coordinates}></CardComponent>
                    </ListItem>
                )
            })}
            {console.log(list[0].geometry.coordinates)}
        </List>
        
    )
}
export default ListCard;