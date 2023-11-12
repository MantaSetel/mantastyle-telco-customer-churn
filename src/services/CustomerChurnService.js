import axios from "axios"
import { API_URL } from "../config/api"

const predictChurn = async (customerChurn) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, customerChurn)
    console.log(response.data.data.churn)
    console.log(response.data.data.churn ? "Yes" : "No")
    return { error: null, data: response.data.data.churn ? "Yes" : "No" }
  } catch (error) {
    return { error, data: null }
  }
}

const CustomerChurnService = {
  predictChurn
}

export default CustomerChurnService