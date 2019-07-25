import React from 'react';
import compare from 'resemblejs';

const Resemble = props => {
    console.log("this props", props);
    const options = {
        //stop comparing once the image is found to be > 30% non-matching
        returnEarlyThreshold: 30
        }

    // compare(Answer, Guess, options, (err, data) =>{
    //     if(err){
    //         return("I AM ERROR!!!")
    //     } else {
    //         return(data);
    //     }
    // })

    return (
        <>
            <h1>THIS IS THE RESEMBLE ELEMENT</h1>
            <img src={props.imageFile}/>
        </>

    )
}

export default Resemble;