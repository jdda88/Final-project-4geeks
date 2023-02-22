const token = sessionStorage.getItem('token')

export const login_user = async (user) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
    };
    try {
        const res = await fetch(`http://localhost:5000/login`, requestOptions);
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

    const res = await fetch(`http://localhost:5000/register`, requestOptions);
    const data = await res.json();
    return data;
}