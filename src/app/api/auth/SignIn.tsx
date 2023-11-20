// pages/auth/signin.tsx

export default function SignInPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="flex w-full max-w-4xl px-40">
          {/* Adjusting the alignment and style of the JobFair text */}
          <div className="flex flex-col justify-center mr-10">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              JobFair
            </h1>
          </div>
  
          {/* Login Box */}
          <div className="w-2/3">
            <div className="rounded-3xl shadow-xl">
              <div className="p-0.5">
                <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Sign-In!</h2>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white "
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="/register" className="text-sm text-white hover:underline-offset-2">Don't have an account?</a>
                      <button
                        type="submit"
                        className="px-6 py-2 text-black bg-white rounded-full hover:bg-gray-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  