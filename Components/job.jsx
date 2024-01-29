import React from 'react'
import { useState } from 'react'

const job = () => {
    let [name, setName] = useState()
    let [password, setPassword] = useState()
    let nameData = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    let passwordData = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    let formHandle = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(password);
        return (
            <div>
                <form onSubmit={formHandle}>
                    <label>name</label>
                    <input type="text" value={name} onChange={nameData} />
                    <label>password</label>
                    <input type="password" value={password} onChange={passwordData} />
                    <input type="Submit" value="Submit" />
                </form>
            </div>
        )
    }
    
}
export default job

    