import React from 'react';
import compare from 'resemblejs';
// import Greeting1 from '../../images/Greeting1.png';

const Resemble = props => {
    console.log("props is ", props);
    const options = {
        //stop comparing once the image is found to be > 30% non-matching
        returnEarlyThreshold: 30
        }
    const {Answer, Guess} = props;

    compare(Answer, Guess, options, (err, data) =>{
        if(err){
            return("I AM ERROR!!!")
        } else {
            return(data);
        }
    })

    return (
        <>
            <img src={Guess}/>
        </>

    )
}

export default Resemble;