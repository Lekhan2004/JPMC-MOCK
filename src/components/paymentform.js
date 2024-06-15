import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PaymentForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset();
        try {
            let res = await axios.post('http://localhost:5000/users/createpayment', data)
            if (res.data.acknowledged) {
                alert("Payment information submitted successfully");
            } else {
                alert("Payment submission failed");
            }
        } catch {
            console.log("err");
        }
        reset();
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h3 className="card-title text-center">Payment Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            {...register("date", { required: true })}
                        />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <p className="form-label">Please note: You have to pay 50 rupees.</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender" {...register("gender", { required: true })}>
                            <option value="">Select an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;
