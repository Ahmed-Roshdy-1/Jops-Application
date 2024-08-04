// import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import HomeCard from "../Components/HomeCard"
import JobListings from "../Components/JobListings"
import ViewAllJobs from "../Components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero />
    <HomeCard />
    <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage
