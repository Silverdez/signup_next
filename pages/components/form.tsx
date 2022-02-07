import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const FormSignUp = (props) => {

      const {inscription, setInscription} = props

      // form validation rules 
      const validationSchema = Yup.object().shape({
        gender: Yup.string()
            .required('Gender is required')
            .nullable(),
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),      
        confirmEmail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Email must match')
            .required('Confirm Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Ts & Cs is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        setInscription(false)
        return false;
    }

return (
  <>
    <div className={`mt-6 mb-3 pb-3 border-b border-b-slate-600 flex flex-col space-y-2`}>
        <button className={`uppercase px-4 py-3 border border-google rounded-md`}><FontAwesomeIcon icon={['fab', 'google']} className={`mr-2 text-google`} /> Sign Up with Google</button>
        <button className={`uppercase px-4 py-3 border border-facebook rounded-md`}><FontAwesomeIcon icon={['fab', 'facebook']} className={`mr-2 text-facebook`} />Sign Up with Facebook</button>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`}>
            <div className="flex flex-col">
                <label>Email</label>
                <input name="email" type="text" {...register('email')} className={`px-4 py-2 rounded-md form-control ${errors.email ? 'is-invalid border-danger border' : ''}`} />
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="flex flex-col">
                <label>Confirm Email</label>
                <input name="email" type="text" {...register('confirmEmail')} className={`px-4 py-2 rounded-md form-control ${errors.confirmEmail ? 'is-invalid border-danger border' : ''}`} />
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.confirmEmail?.message}</div>
            </div>
        </div>
        <div className={`w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`}>
            <div className="flex flex-col">
                <label>Password</label>
                <input name="password" type="password" {...register('password')} className={`px-4 py-2 rounded-md form-control ${errors.password ? 'is-invalid border-danger border' : ''}`} />
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="flex flex-col">
                <label>Confirm Password</label>
                <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`px-4 py-2 rounded-md form-control ${errors.confirmPassword ? 'is-invalid border-danger border' : ''}`} />
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
        </div>
        <div className={`w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`}>
            <div className="flex flex-col">
                <label>Date of Birth</label>
                <input name="dob" type="date" {...register('dob')} className={`px-4 py-2 rounded-md form-control ${errors.dob ? 'is-invalid border-danger border' : ''}`} />
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.dob?.message}</div>
            </div>
        </div>
        <div className={`w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`}>
            <div className="flex flex-col">
                <label>Gender</label>
                <div className={`flex space-x-4 px-4 py-2 rounded-md form-control ${errors.gender ? 'is-invalid border-danger border' : ''}`}>
                    <div className="radio">
                        <label>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Male"
                                className="mr-2 form-check-input"
                                id="male"
                            />
                            Male  
                        </label>
                    </div>      
                    <div className="radio">
                        <label>
                        <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Female"
                                className="mr-2 form-check-input"
                                id="female"
                            />
                            Female     
                        </label>     
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Non-binary"
                                className="mr-2 form-check-input"
                                id="non-binary"
                            />
                            Non-binary
                        </label>
                    </div>
                    
                </div>
                <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.gender?.message}</div>
            </div>
        </div>
        <div className="mb-6 form-group form-check">
            <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`p-1 mr-2 form-check-input ${errors.acceptTerms ? 'is-invalid border-danger border' : ''}`} />
            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
            <div className="mt-1 text-0.7 text-danger uppercase invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>
        <div className="flex space-x-4 form-group">
            <button type="submit" className="px-6 py-4 text-white uppercase bg-blue-400 rounded-lg">Register</button>
            <button type="button" onClick={() => reset()} className="px-6 py-4 text-white uppercase bg-gray-700 rounded-lg">Reset</button>
        </div>
    </form>
  </>
)
}

export default FormSignUp