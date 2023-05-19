import { useState, useEffect } from "react"
import axios from 'axios';
const UseFetch = (uri) => {
    const [Data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [ErrorMessage, SetErrorMessage] = useState();

    const getProduct = async () => {
        try {
            const { data: ResponseData } = await axios.get(uri)
            SetData(ResponseData);
            SetLoading(false);
        }
        catch (err) {
            SetErrorMessage(err);
            SetLoading(false);
        }
    }
    useEffect(() => { getProduct(); }, []);

    return {Data,loading,ErrorMessage} 
}
export default UseFetch;