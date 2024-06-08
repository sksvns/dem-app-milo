import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useApi from '../../hooks/useApi'
import "./dashboard.css";
import MUICard from '../../components/mui-card/MUICard';
import { capitalize } from '../../utils/helper-function';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';


const Dashboard: React.FC = () => {
    const [data, error, loading] = useApi("https://jsonplaceholder.typicode.com/albums")
    const [numberOfGroup, setNumberOfGroup] = useState<any>(0);
    const [value, setValue] = React.useState('Group1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (data) {
            setNumberOfGroup(data[data.length - 1].userId)
        }
    }, [data])

    return (
        <div className='dashboard-conatiner'>
            <h1>Albums</h1><hr />
            <LoadingSpinner loading={loading} />
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                >
                    {Array.from({ length: numberOfGroup }).map((item, idx) => {
                        return <Tab value={`Group${idx + 1}`} label={`Group ${idx + 1}`} key={`Group${idx + 1}`} />
                    })}

                </Tabs>
                <div className='album-conatiner'>
                    {data && data.filter((item: any) => item.userId === +(value.replace(/[^0-9]/g, ""))).map((item: any) => {
                        return (<MUICard title={capitalize(item.title)} id={item.id} key={item.id} />)
                    })}
                </div>

            </Box>
        </div>
    )
}

export default Dashboard