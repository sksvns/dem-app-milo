import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useApi from '../../hooks/useApi'
import "./dashboard.css";
import MUICard from '../../components/mui-card/MUICard';
import { capitalize } from '../../utils/helper-function';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';

export type APIAlbumRes = {
    userId: number,
    id: number,
    title: string
}

const Dashboard: React.FC = () => {
    const {data, loading} = useApi<APIAlbumRes[]>("https://jsonplaceholder.typicode.com/albums")
    const [numberOfGroup, setNumberOfGroup] = useState<any>(0);
    const [value, setValue] = React.useState('Group1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const generateGUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

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
                    {Array.from({ length: numberOfGroup }, () => generateGUID()).map((item, idx) => {
                        return <Tab value={`Group${idx + 1}`} label={`Group ${idx + 1}`} key={`Group${item + 1}`} />
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