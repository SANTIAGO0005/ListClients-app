import { useState, } from "react"
import axios from "axios"


const baseUrl = ''

// eslint-disable-next-line react-hooks/rules-of-hooks
const [data, setData] = useState([])

export const Getdata = async() => {
    await axios.get(baseUrl)
    .then(response => {
     setData(response.data)
    })
}