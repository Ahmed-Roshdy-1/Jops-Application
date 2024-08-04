/* eslint-disable react/prop-types */

import { CircleLoader } from "react-spinners";
const override={
    display:"block",
    margin:"100px auto"
}

const Spinner = ({loading}) => {
  return (
    <CircleLoader 
     color="#4338ca"
     size={150}
     loading={loading}
     cssOverride={override}
    />
  )
}

export default Spinner
