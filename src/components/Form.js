import "./Form.scss";
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form action="">
                <label htmlFor="">Your Name</label>
                <input type="text" />
                <label htmlFor="">Your Email</label>
                <input type="text" />
                <label htmlFor="">Your Phone Number</label>
                <input type="text" />
                <label htmlFor="">Message</label>
                <textarea rows="6" placeholder="Type your message here." />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form