exports.parseMongooseError = (error) =>{
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);
    
    return errors;
}