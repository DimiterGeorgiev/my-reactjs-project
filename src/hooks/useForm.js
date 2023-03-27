import { useState } from "react";

export const useForm = (initialValues, onSubmitHendler) => {
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHendler(values);
    }

    return {
        values,
        changeHandler,
        onSubmit,
    };
};