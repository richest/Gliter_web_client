import { useParams } from 'react-router-dom'
export default function showResult(props) {
    const params = useParams()
    console.log(params, 'params');
    return (
        <div>
            {params.result} 
        </div>
    )
}