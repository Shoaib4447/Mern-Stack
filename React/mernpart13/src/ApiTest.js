import {React,useState,useEffect} from 'react'
import './Css/style.css';
import axios from 'axios';

const ApiTest = () => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
      const fetchRates = async () => {
        try {
          const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=kVlyvISV71rXaHQQvBQiQlWsRuztW8m_`);
          setRates(response.data.rates);
        } catch (error) {
          console.error('Error retrieving exchange rates:', error);
        }
      };
  
      fetchRates();
    }, []);
  
    if (!rates) {
      return <div className='Api_Data' >API Rates not fount</div>;
    }
  
    return (
      <div>
        {/* Render the rates data */}
      </div>
    );
}

export default ApiTest;
