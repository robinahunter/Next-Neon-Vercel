'use client'

import {useState} from 'react'
import { Alert, Button, Label, TextInput } from 'flowbite-react';
export default function RegisterForm ({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)


    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "/api/auth/register/"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)
        console.log(response)
        const result = await response.json()
        setResults(result)

        if (didSubmit) {
            didSubmit(result)
        }
        if (result.message) {
            setMessage(result.message)
        }
        if (response.status === 201) {
            window.location.href = "/login"
        }
    }

    return <>
        {message && <Alert color="warning">{message}</Alert>}

        <form className="flex max-w-md flex-col gap-4" onSubmit={handleForm}>

        <div>
            <div className="mb-2 block">
                
                <Label
                    className='text-white'
                    htmlFor="username"
                    value="Pick a username"
                />
                </div>
                <TextInput
                id="username"
                placeholder="your username"
                required
                name='username'
                type="text"
                />
            </div>

            <div>
            <div className="mb-2 block">
                
                <Label
                    className='text-white'
                    htmlFor="email"
                    value="Your Email"
                />
                </div>
                <TextInput
                id="email"
                placeholder="Your email"
                required
                name='email'
                type="email"
                />
            </div>
        <div>
            <div className="mb-2 block">
                <Label
                    className='text-white'
                    htmlFor="password"
                    value="Your password"
                />
                </div>
                <TextInput
                id="password"
                placeholder='enter password'
                required
                name='password'
                type="password"
                />
            </div>
        <div>
            <div className="mb-2 block">
                <Label
                    className='text-white'
                    htmlFor="password2"
                    value="Confirm your password"
                />
                </div>
                <TextInput
                id="password2"
                placeholder='enter password'
                required
                name='passwordConfirm'
                type="password"
                />
        </div>
        
        <Button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Register</Button>


            </form>
        
    </>
}