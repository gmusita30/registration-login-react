export  const validate=(data,type)=>{

const errors={};



if(!data.email){
   errors.email='Email required!'
}else if(!/\S+@\S+\.\S+/.test(data.email)){
   errors.email='Email address is invalid'
}else{
 delete errors.email
}


if(!data.password){
 errors.password='Password is required!'
}else if(data.password.length < 6){
 errors.password='Password must be at least 6 characters'
}else{
 delete errors.password
}


if(type==='signup'){
   if(!data.name.trim()){
      errors.name='Firstname is required!'
   }else{
    delete errors.name
   }
   if(!data.last.trim()){
      errors.last='Lastname is required!'
   }else{
    delete errors.last
   }
   if(!data.gender.trim()){
      errors.gender='Gender is required!'
   }else{
    delete errors.gender
   }
   if(!data.confirmPassword){
      errors.confirmPassword='Confirm password!'
     }else if(data.confirmPassword!==data.password){
      errors.confirmPassword='Password must match'
     }else{
      delete errors.confirmPassword
     }
     
}



return errors;
}