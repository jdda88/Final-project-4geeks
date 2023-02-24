import toast, { Toaster } from 'react-hot-toast';

const BaseURL = 'http://localhost:5000'
const token = sessionStorage.getItem('token')

export const login_user = async (user, navigate) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
    };
    try {
        const res = await fetch(`${BaseURL}/login`, requestOptions);
        const data = await res.json();
        sessionStorage.setItem("token", data.token);

        return window.location.reload(true)
    }
    catch (error) {
        console.log('Fetch login error')
    }
};

export const register_user = async (new_user) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(new_user)
    };

    try {
    const res = await fetch(`${BaseURL}/register`, requestOptions);
    const data = await res.json();
    toast.success('Successfully!')
    return data;
    }
    catch (error) {
        console.log('Fetch register error')
        toast.error("This didn't work.")
        return error
    }
}

export const get_user = async () => {

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`
        },
    };
    try {
    const res = await fetch(`${BaseURL}/me`, requestOptions);
    const data = await res.json();
    return data;
    }
    catch (error) {
        console.log('Fetch get_user error')
    }
}