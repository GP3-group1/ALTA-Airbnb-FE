import React, { useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/features/userSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
const [cookies, setCookies] = useCookies(['userToken'])
const navigate = useNavigate()
// const auth = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch()

useEffect(() => {
    if (!cookies.userToken) {
      dispatch(logout());
    }
  }, [cookies.userToken, dispatch]);
    return (
        <div className='flex justify-center'>
            <button className='btn btn-wide' onClick={() => navigate('/')}>back to login</button>
        </div>
    )
}

export default Home
