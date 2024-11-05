import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function LoginForm(props) {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] p-5 bg-red-50 w-[500px] rounded-xl">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-red-200">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Welcome Back!</h2>
        <form onSubmit={props.handleLogin} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-red-700 mb-2 font-semibold">
              Email Address
            </label>
            <div className="flex items-center">
              <span className="absolute pl-4 text-red-600">
                <FaEnvelope />
              </span>
              <input
                id="email"
                type="email"
                onChange={props.Getemail}
                value={props.emailValue}
                className="w-full px-12 py-3 bg-red-100 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-red-700 mb-2 font-semibold">
              Password
            </label>
            <div className="flex items-center">
              <span className="absolute pl-4 text-red-600">
                <FaLock />
              </span>
              <input
                id="password"
                type="password"
                onChange={props.Getpassword}
                value={props.passwordValue}
                className="w-full px-12 py-3 bg-red-100 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-red-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-red-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-red-500 hover:text-red-700">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:shadow-lg transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
