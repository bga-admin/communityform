import React, {useState, useRef} from 'react'


const Form = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxL_iA3JV8nA5zNzMFmNuR6n1xHa5DgYTR8KnGnVm31ccNWYk_zYYssUThogn6alrLHxQ/exec"

    const handleSubmit = (e) =>{
        e.preventDefault()

        let form = new FormData(formRef.current)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        form.append('Date', today)

        fetch(scriptUrl, {method: 'POST', body: form})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
        <div className='grey pb-4 container pt-3' ><h1 className='wtg'>WHAT THE GOV?</h1>

            <p>What do you want to know or share about Chicago or Illinois politics and government?</p>
            <p className='submitbelow'>Submit below!</p>
            <p>For more on our <span className='hashtag'><a href='www.bettergov.org'>#WhatTheGov</a></span> coverage, visit bettergov.org.</p>
            <img src='/bga.png'></img>
        </div>
        <div className='pt-5'>

            <form method="post" onSubmit={handleSubmit} ref={formRef} name="google-sheet">

            <div className="form-style">
                <textarea type=""  name="Question" placeholder='Your Question' />
            </div> 
            <h4 className='pb-0 '>Your contact info</h4>
            <h6>We'll be in touch if we look into your question.</h6>
            <div className="form-style">
                <input type="" id="name"  name="Name" placeholder='Name' />
            </div>  
            <div className="form-style">
                <input type="email" name="Email" placeholder='Email address' />
            </div>
            <div className="form-style">
                <input type="number" name="Phone Number" placeholder='Phone number' />
            </div>
 
            <div className="form-style">
                <input id='button' type="submit" name="submit" value="Submit" />
            </div> 
            </form>
        </div>

    </div>
  )
}

export default Form