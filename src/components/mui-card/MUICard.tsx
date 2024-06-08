import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

type MUICardProps = {
    title: string;
    id: number;
}

const MUICard = ({title, id}:MUICardProps) => {
    return (
        <Card sx={{ maxWidth: 275, minWidth: 275, margin: 1 }}  variant="outlined">
            <CardContent>
                {title}
            </CardContent>
            <CardActions>
                <Button size="small">View Photos</Button>
            </CardActions>
        </Card>
    )
}

export default MUICard;