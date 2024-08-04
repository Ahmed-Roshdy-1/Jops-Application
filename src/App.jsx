import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom"


import MainLayout from "./layouts/MainLayout"
import HomePage from "./Pages/HomePage"
import JobsPage from "./Pages/JobsPage"
import NotFound from "./Pages/NotFound"
import JobPage,{jobLoader} from "./Pages/JobPage"
import AddJobPage from "./Pages/AddJobPage"
import EditJobPage from "./Pages/EditJobPage"

const App = () => {
  const addJob=async (newJob)=>{
     // eslint-disable-next-line no-unused-vars
     const res= await fetch('/api/jobs',{
      method:"POST",
      headers:{
        "Content-Type" : "applition/json"
      },
      body:JSON.stringify(newJob)
     })
     return
    
  }
 // Delete Job
 const deleteJob = async (id) => {
  // eslint-disable-next-line no-unused-vars
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
};
const editJob = async (updatedJob) => {
// eslint-disable-next-line no-unused-vars
  const res= await fetch('/api/jobs/'+updatedJob.id,{
      method:"PUT",
      headers:{
          "Content-Type" : "applition/json"
     },
     body:JSON.stringify(updatedJob)
 })
 return

};
//  deleteJob(1)
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route loader={jobLoader} path="/edit-job/:id"  element={<EditJobPage editJobSubmit={editJob}  />} />
      <Route loader={jobLoader} path="/jobs/:id"  element={<JobPage deleteJob={ deleteJob }/>} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)
  return <RouterProvider router={router} />
}


export default App
