import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

type MUICardProps = {
    title: string;
    id: number;
}

const MUICard = ({title, id}:MUICardProps) => {
    return (
        <Card sx={{ maxWidth: 275, minWidth: 275, margin: 1 }} variant="outlined">
            <CardContent>
                {title}
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`/photos/${id}`}>View Photos</Link></Button>
            </CardActions>
        </Card>
    )
}

export default MUICard;