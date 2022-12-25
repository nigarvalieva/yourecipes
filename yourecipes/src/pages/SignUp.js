import React, { useReducer } from 'react'
import './SignUp.css'

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    termsAccepts: false
}

const reducer = (state, action) => {
    return { ...state, [action.input]: action.value };
}

const validateState = (state) => {
    return state.password === state.passwordRepeat
        && state.termsAccepts && state.password.length > 3
}

const SignUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onChange = (e) => {
        const { name, value, checked } = e.target
        const action = {
            input: name,
            value: value === 'termsAccepts' ? checked : value,
        }
        dispatch(action)
    }

    const addRegisterHandler = (event, e) => {
        event.preventDefault()
        alert(`Hey ${state.name} you have successful register `)
    }
    return (
        <div className='signUpForm'>
            <div className="registerForm">
                <div className="RegisterContainerHeadLine">Register</div>
                <form className="RegisterForm">
                    <input
                        type="text"
                        className="TextInput"
                        name="name"
                        placeholder="Name"
                        autoComplete="new-password"
                        onChange={onChange}
                    />
                    <input
                        type="email"
                        className="TextInput"
                        name="email"
                        placeholder="Email"
                        autoComplete="new-password"
                        onChange={onChange}
                    />

                    <input
                        type="password"
                        className="TextInput"
                        name="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={onChange}
                    />

                    <input
                        type="password"
                        className="TextInput"
                        name="passwordRepeat"
                        placeholder="Password repeat"
                        autoComplete="new-password"
                        onChange={onChange}
                    />
                    <label className="TouchCheckboxlabel">
                        <input
                            type="checkbox"
                            className="TouchCheckbox"
                            name="termsAccepts"
                            onChange={onChange}
                        />
                        Accept Terms of Use!
                    </label>
                    <button
                        disabled={!validateState(state)}
                        className={!validateState(state) ? "Disabled" : null}
                        onClick={addRegisterHandler}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;