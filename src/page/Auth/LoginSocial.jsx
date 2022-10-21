import AuthSocial from '~/components/Input/AuthSocial';
import { useGoogleLogin } from '@react-oauth/google';
import { LoginWithGoogle } from '~/redux/apiRequest';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
const LoginSocial = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {

            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token} ` } },
            );
            const AuthGoogle = await LoginWithGoogle(userInfo.data, dispatch);
            if (AuthGoogle.status === 'success') {

                navigate('/');
            }
            if (AuthGoogle.status === 'error') {
                toast.error('Login failed');
            }
            console.log(`userInfo`, AuthGoogle);

        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <>

            <AuthSocial
                handleClick={googleLogin}
                name="Google" icon={<FcGoogle />} />

            <AuthSocial name="Facebook" icon={<FaFacebookF className='text-blue-800' />} />

            <AuthSocial name="Github" icon={<IoLogoGithub />} />
        </>
    );
}

export default LoginSocial;