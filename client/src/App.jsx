
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavbarCustom from './components/NavbarHeader'
import HomeTenant from './pages/tenant/HomeTenant'
import BookingDetailPage from './pages/tenant/BookingDetail'
import { useContext, useEffect, useState } from 'react'
import { API, setAuthToken } from './config/api'
import { UserContext } from './context/usercontext'
import PropertyDetail from './pages/tenant/PropertyDetail'


function App() {
  const [state, dispatch] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth")
      console.log("Check user success : ", response)
      let payload =response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type : "USER_SUCCESS",
        payload,
      })
      setIsLoading(false)

    } catch (error) {
      console.log("Check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      })
      navigate("/")
      setIsLoading(false)
      }
    }
    
    useEffect(() =>{
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        checkUser();
      } else {
        setIsLoading(false);
      }
    }, []);

    useEffect(() => {
      if (!isLoading) {
        if (state.isLogin === false) {
          // navigate("/");
        }
      }
    }, [isLoading])

  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route path='/' element={<HomeTenant />} />
        <Route path='/details' element={<BookingDetailPage /> } />
        <Route path='/property-detail' element={<PropertyDetail /> } />
      </Routes>
    </>
  )
}

export default App
