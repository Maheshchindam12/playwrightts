import Ajv from 'ajv';


const ajv = new Ajv();



export function validateSchema(
    schema:any,
    response:any
){


const validate =
    ajv.compile(schema);



const result =
    validate(response);



if(!result){

    console.log(
        validate.errors
    );

}



return result;


}