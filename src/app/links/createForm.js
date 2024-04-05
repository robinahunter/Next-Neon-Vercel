'use client'

import {useState} from 'react'
import { Alert, Button, Label, TextInput } from 'flowbite-react';



export default function LinksCreateForm ({didSubmit}) {
    const [results, setResults] = useState(null)
    const [message, setMessage] = useState(null)

    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const JSONData = JSON.stringify(data)
        const endpoint = "/api/links/"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options)

        const result = await response.json()

        setResults(result)
        if (didSubmit) {
            didSubmit(result)
        }
        if (result.message) {
            setMessage(result.message)
        }
    }

    return <>
        {message && <Alert color="warning">{message}</Alert>}
         <form className="flex max-w-md flex-col gap-4" onSubmit={handleForm}>

         <div>
            <div className="mb-2 block">
            <Label
                className='text-white'
                htmlFor="url"
                value="Enter a link to shorten"
            />
            </div>
            <TextInput
            id="url"
            placeholder="Your url to shorten"
            required
            name="url"
            type="text"
            />
        </div>
        <Button type="submit"class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Shorten
        </Button>

        </form>
    </>
}