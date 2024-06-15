import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        // Uncomment and update this section if you want to enable API call
        // try {
        //     let res = await axios.post('http://localhost:5000/users/createblog', data)
        //     if (res.data.acknowledged) {
        //         alert("Blog added successfully");
        //         window.location.assign('/blogs');
        //     } else {
        //         alert("Blog creation failed");
        //     }
        // } catch (error) {
        //     console.log("Error:", error);
        // }

        reset();
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h3 className="card-title text-center">Water Control</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="waterQuality" className="form-label">Water Quality</label>
                        <select className="form-select" id="waterQuality" {...register("waterQuality", { required: true })}>
                            <option value="">Select an option</option>
                            <option value="good">Good</option>
                            <option value="bad">Bad</option>
                        </select>
                        {errors.waterQuality && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="feedback" className="form-label">Feedback</label>
                        <textarea
                            className="form-control"
                            id="feedback"
                            rows="4"
                            {...register("feedback", { required: true })}
                        ></textarea>
                        {errors.feedback && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <label className="form-label">Water supply is regular</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="regularSupplyYes" value="yes" {...register("regularSupply", { required: true })} />
                                <label className="form-check-label" htmlFor="regularSupplyYes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="regularSupplyNo" value="no" {...register("regularSupply", { required: true })} />
                                <label className="form-check-label" htmlFor="regularSupplyNo">No</label>
                            </div>
                        </div>
                        {errors.regularSupply && <span className="text-danger">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
