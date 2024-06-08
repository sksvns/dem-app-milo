import React from 'react'
import useApi from '../../hooks/useApi'

const Dashboard: React.FC = () => {
    const [ data, error, loading ] = useApi("https://jsonplaceholder.typicode.com/albums")
    console.log(data, error, loading)
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard