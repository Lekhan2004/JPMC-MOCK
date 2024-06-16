import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PumpOperator() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
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
                <h3 className="card-title text-center">Pump Operator</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Supplied Water</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="morning"
                                {...register("suppliedWater.morning")}
                            />
                            <label htmlFor="morning" className="form-check-label">Morning</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="evening"
                                {...register("suppliedWater.evening")}
                            />
                            <label htmlFor="evening" className="form-check-label">Evening</label>
                        </div>
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
                    {/* <div className="mb-3">
                        <label htmlFor="chlorinate" className="form-label">Did you chlorinate the water?</label>
                        <select className="form-select" id="chlorinate" {...register("chlorinate", { required: true })}>
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.chlorinate && <span className="text-danger">This field is required</span>}
                    </div> */}
                    <div className="mb-3">
                        <label className="form-label">Did you chlorinate the water?</label>
                        <div className="d-flex">
                            <div className="form-check me-2">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="chlorinateYes"
                                    value="yes"
                                    {...register("chlorinate", { required: true })}
                                />
                                <label htmlFor="chlorinateYes" className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="chlorinateNo"
                                    value="no"
                                    {...register("chlorinate", { required: true })}
                                />
                                <label htmlFor="chlorinateNo" className="form-check-label">No</label>
                            </div>
                        </div>
                        {errors.chlorinate && <span className="text-danger">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PumpOperator;