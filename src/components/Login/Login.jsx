import { Button, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

const Login = ({ open, handleCloseLogin, handleOpenLogin }) => {
  return (
    <React.Fragment>
      <Modal show={open} size="md" popup={true} onClose={handleCloseLogin}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>

            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Login;
