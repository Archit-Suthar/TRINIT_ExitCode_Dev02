import BugContext from "./bugContext";
import {useState} from "react";

const BugStates = (props) => {
    const host = "http://localhost:5000";
    const bugsInitial = []
      const [bugs,setBugs] = useState(bugsInitial)
      //Get All Bugs
      const getBug = async()=>{
        const response = await fetch(`${host}/bugs/fetchallbugs`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem("token")
            }
          });
          const json = await response.json()
          console.log(json);
         setBugs(json)
      }


    //Add bug
    const addBug = async(name,description,type)=>{
        const response = await fetch(`${host}/bugs/addbug`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem("token")              
            },
            
            body: JSON.stringify({name,description,type})
          });
          const bug = await response.json();
        setBugs(bugs.concat(bug));
        console.log(bugs);
      }

  return (
    <div>
      <BugContext.Provider value={{bugs,getBug,addBug}}>
            {props.children}
        </BugContext.Provider>
    </div>
  )
}

export default BugStates;
