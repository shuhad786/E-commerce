import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../../redux/UserSlice"; // Adjust the import path as necessary

export const BillingInformation = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user); // Access users from the Redux store
    const [billingInfo, setBillingInfo] = useState({
        fullName: '',
        address: '',
        mobile: '',
        email: ''
    });
    const [loginError, setLoginError] = useState(null); // State for login error
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [isLoginAttempt, setIsLoginAttempt] = useState(false); // State to track if login is attempted

    useEffect(() => {
        // Fetch users when the component mounts
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === billingInfo.email);
        if (user) {
            setIsLoggedIn(true);
            setLoginError(null);
        } else {
            setLoginError("User not found. Please register.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare user data for registration
        const userData = {
            email: billingInfo.email,
            username: billingInfo.fullName.split(' ').join('').toLowerCase(),
            password: 'defaultPassword123', // Handle password securely in a real app
            name: {
                firstname: billingInfo.fullName.split(' ')[0],
                lastname: billingInfo.fullName.split(' ')[1] || '',
            },
            address: {
                city: 'Your City', // Replace with actual city input if needed
                street: billingInfo.address,
                number: 1, // Replace with actual number input if needed
                zipcode: 'Your Zipcode', // Replace with actual zipcode input if needed
                geolocation: {
                    lat: '0', // Replace with actual latitude if needed
                    long: '0', // Replace with actual longitude if needed
                },
            },
            phone: billingInfo.mobile,
        };

        // Dispatch action to add user
        dispatch(addUser(userData));
    };

    return (
        <div className='mt-10 p-10 shadow-lg rounded-xl shadow-gray-300'>
            <h1 className='text-4xl font-bold'>Shipping Details</h1>
            {!isLoggedIn ? (
                <div>
                    {users.length > 0 ? (
                        <div>
                            <button 
                                onClick={() => setIsLoginAttempt(true)} 
                                className="mt-4 p-2 font-semibold bg-emerald-500 text-white rounded hover:bg-white hover:text-emerald-500 ease-in-out duration-500"
                            >
                                Login
                            </button>
                            {isLoginAttempt && (
                                <form className="mt-4 flex flex-col justify-evenly" onSubmit={handleLogin}>
                                    <div className="flex items-start">
                                        <input
                                            className="p-2 w-1/3 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            value={billingInfo.email}
                                            onChange={handleChange}
                                        />
                                        <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
                                    </div>
                                    <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Login</button>
                                    {loginError && <p className="text-red-500">{loginError}</p>}
                                </form>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p className="text-red-500">No users available. Please register.</p>
                            <button 
                                onClick={() => setIsLoginAttempt(false)} 
                                className="mt-4 p-2 bg-green-500 text-white rounded"
                            >
                                Register
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <form className="mt-16 flex flex-col justify-evenly" onSubmit={handleSubmit}>
                    <div className="flex items-start">
                        <input
                            className="p-2 w-1/4 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
                            type='text'
                            name='fullName'
                            placeholder='Full Name'
                            value={billingInfo.fullName}
                            onChange={handleChange}
                        />
                        <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
                    </div>
                    <br />
                    <div className="flex items-start">
                        <input
                            className="p-2 w-11/12 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
                            type='text'
                            name='address'
                            placeholder='Address'
                            value={billingInfo.address}
                            onChange={handleChange}
                        />
                        <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
                    </div>
                    <br />
                    <div className="flex items-start">
                        <input
                            className="p-2 w-1/6 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
                            type='tel'
                            name='mobile'
                            placeholder='Mobile'
                            value={billingInfo.mobile}
                            onChange={handleChange}
                        />
                        <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
                    </div>
                    <br />
                    <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Register</button>
                </form>
            )}
        </div>
    );
};
