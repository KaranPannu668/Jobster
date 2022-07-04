import { useEffect } from 'react'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'


const Stats = () => {
    const {isLoading, monthyApplications} = useSelector(store => store.allJobs)


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(showStats())
    },[])
    return <>
        <StatsContainer />
        {/* {monthyApplications.length > 0 && <ChartsContainer /> } */}
        <ChartsContainer />
    </>
}

export default Stats