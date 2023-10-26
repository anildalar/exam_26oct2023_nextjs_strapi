"use client"
//1 Import Area

import { useEffect, useState } from "react";



//2 Defination Area
function Home() {
  //2.1 Hooks area
  const [subjects,setSubjects] = useState([{name:"A"},{name:"B"},{name:"C"},{name:"D"}]);
  useEffect(()=>{
    //let URL = process.env.STRAPI_URL;
   // console.log('Hello',URL);
    fetch(`http://localhost:1337/api/subjects`,{ 'Content-Type': 'application/json'})
    .then((res)=>{ return res.json() })
    .then((data)=>{
      
      console.log(data.data);
      console.log(data.data.map((cv,idx,arr)=>{ return { name:cv.attributes.name}  }));
      setSubjects(data.data.map((cv,idx,arr)=>{ return { name:cv.attributes.name}  }));
    })
    .catch(()=>{})
    .finally(()=>{});

  },[subjects]);

  //2.2 Defination


  //2.3 Return statment
  return (
    <>
      <div className="container">
          <div className="card w-100 mt-5 text-center" style={{width: '18rem'}}>
              <div className="card-header fw-bolder fs-1">
                Welcome TO My QUIZ
              </div>
              <div className="card-body text-start">
                  <form>
                   <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Subject</label>
                      <select className="form-control">
                        {
                          subjects.length > 0 &&
                          subjects.map((cv,idx,arr)=>{
                            return <option key={idx}>{cv.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </form>

              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-lg">Start Quiz</button>
              </div>
          </div>
      </div>
    </>
  )
}

//3. Export Area

//.3.1 Default Export
export default Home;
//3.2  Named Export
