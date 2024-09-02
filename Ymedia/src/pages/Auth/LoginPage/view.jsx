import { AuthForm } from "../../../components/Organism/AuthForm";
import illustration from "../../../assets/login.png";
import { Card, Alert } from "flowbite-react";

const LoginPageView = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  error,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full max-w-4xl">
        <div className="hidden md:flex md:w-1/2  items-center justify-center p-10">
          <img
            src={illustration}
            alt="Login Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <Card className="shadow-none">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            {error && (
              <Alert color="failure" className="mb-4">
                {error}
              </Alert>
            )}
            <AuthForm
              email={email}
              passwod={password}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSubmit={handleSubmit}
              illustration={illustration}
            />
          </Card>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Don&apos;t have an accout?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageView;
