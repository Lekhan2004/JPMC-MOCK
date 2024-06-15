import { useForm } from "react-hook-form";

function Formi()
{
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
        const onSubmit = async (data) => {
            console.log(data);
            try{
                let res = await axios.post('http://localhost:5000/users/createblog', data)
                if(res.data.acknowledged){
                  alert("Blog added successfully")
                  navigate('/blogs');
                }
                else{
                  alert("Blog creation failed")
                } 
              } catch{
                console.log("err")
              }
        
            reset()
        };
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="card shadow p-4" style={{ width: '400px' }}>
                    <h3 className="card-title text-center">Contact Us</h3>
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
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                {...register("email", { 
                                    required: true, 
                                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
                                })}
                            />
                            {errors.email && <span className="text-danger">Please enter a valid email</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactMethod" className="form-label">Preferred Contact Method</label>
                            <select className="form-select" id="contactMethod" {...register("contactMethod", { required: true })}>
                                <option value="">Select an option</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                            {errors.contactMethod && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="subscribe"
                                {...register("subscribe")}
                            />
                            <label htmlFor="subscribe" className="form-check-label">Subscribe to newsletter</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        );
}

export default Formi