const FullName =()=>{
    let tab=[{name:"Amira", surName:"Manai"}];
    return(
        tab.map((el,index)=>{
return( 
    <div key= {index}>
            <strong >Name:</strong> {el.name}
            <strong>SurName:</strong> {el.surName}


        </div>
        )})

        
        )
    
}
export default FullName;