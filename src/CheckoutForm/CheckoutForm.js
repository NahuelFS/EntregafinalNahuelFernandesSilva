import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        onConfirm(userData);
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='formField'>
                <label className='formLabel'>Nombre:</label>
                <input
                    className='formInput'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div className='formField'>
                <label className='formLabel'>Email:</label>
                <input
                    className='formInput'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            <div className='formField'>
                <label className='formLabel'>Teléfono:</label>
                <input
                    className='formInput'
                    type='number'
                    name='phone'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                />
            </div>

            <button className='btn' type='submit' style={{ marginTop: "40px" }}>
                {" "}
                Crear orden
            </button>
        </form>
    );
};

export default CheckoutForm;
