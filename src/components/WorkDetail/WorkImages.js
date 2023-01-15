import React  from "react";
import Moscow from './Conditonal/Moscow'
import Amazon from './Conditonal/Amazon'
import Netflix from './Conditonal/Netflix'
import Weather from './Conditonal/Weather'
import Dtodo from './Conditonal/Dtodo'
import SomosMas from './Conditonal/SomosMas'
import Mine from './Conditonal/Mine'
import CelJava from "./Conditonal/CelularJava";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
function WorkImages(props) {

    if(props.project?.id === 1){
        return <Amazon project={props.project}/>
    }else if(props.project?.id === 2){
        return <Netflix project={props.project}/>

}
    else if(props.project?.id === 3){
        return <Moscow project={props.project}/>
        
    }
    else if(props.project?.id === 4){
        return <Weather project={props.project}/>
        
    }
    else if(props.project?.id === 5){
        return <Dtodo project={props.project}/>
        
    }
    else if(props.project?.id === 6){
        return <SomosMas project={props.project}/>
        
    }
    else if(props.project?.id === 7){
        return <Mine project={props.project}/>
        
    }
    else if(props.project?.id === 8){
        return <CelJava project={props.project}/>
        
    }
    else{
        return <div>
            <ProjectDetail project={props.projectdetails}/>
        </div>
    }

  }
  export default WorkImages;     