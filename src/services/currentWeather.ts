import axiosInstance from "@/axiosInstance/axiosInstance"




export const getCurrentWeather=async({city,unit}:
    {city:string;unit:"metric" | "imperial"})=>{
const response=await axiosInstance.get('/weather',{
    params:{
    q:city,
    appid:process.env.API_KEY,
    units:unit
    }
});
return response.data
}