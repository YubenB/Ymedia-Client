import { Button, Card, Label, TextInput, Alert } from "flowbite-react";

export function AuthForm({
  email,
  password,
  username,
  handleSubmit,
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
}) {
  const path = window.location.pathname;

  return (
    <form onSubmit={handleSubmit}>
      {path === "register" && (
        <div className="mb-4">
          <Label htmlFor="username" className="mb-2 block">
            Username
          </Label>
          <TextInput
            id="username"
            type="username"
            placeholder="Your_user_name"
            value={username}
            onChange={handleUsernameChange}
            required={true}
            shadow={true}
          />
        </div>
      )}
      <div className="mb-4">
        <Label htmlFor="email" className="mb-2 block">
          Email
        </Label>
        <TextInput
          id="email"
          type="text"
          placeholder="your.email@mail.com"
          value={email}
          onChange={handleEmailChange}
          required={true}
          shadow={true}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="password" className="mb-2 block">
          Password
        </Label>
        <TextInput
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={handlePasswordChange}
          required={true}
          shadow={true}
        />
      </div>

      <Button type="submit" color="blue" className="w-full">
        Login
      </Button>
    </form>
  );
}
