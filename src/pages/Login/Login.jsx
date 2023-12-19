import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captcheRef = useRef(null);
    const [disabled, setDisabaled] = useState(true);
    useEffect(() => {
    loadCaptchaEnginge(6)      
    }, [])
    

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    }

    const handleValidateCaptche =  () => {
        const user_captcha_value = captcheRef.current.value;

        if (validateCaptcha(user_captcha_value)==true) {
           setDisabaled(false);
        }else{
             setDisabaled(true)
        }
    }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex ">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captcheRef}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleValidateCaptche} className='btn btn-outline btn-xs mt-2'>validate</button>
              </div>
              <div className="form-control mt-6">
                <input type="submit" disabled={disabled} value="Login" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
