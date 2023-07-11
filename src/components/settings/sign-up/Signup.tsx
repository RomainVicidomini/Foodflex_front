/* eslint-disable react-hooks/rules-of-hooks */
import { ChangeEvent, FormEvent } from 'react';
import { X } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import Field from '../Field';

import {
  changeSignUpCredentialsField,
  signUp,
} from '../../../store/reducers/settings';

function signup() {
  const email = useAppSelector(
    (state) => state.settings.signUpCredentials.email
  );
  const password = useAppSelector(
    (state) => state.settings.signUpCredentials.password
  );
  const firstname = useAppSelector(
    (state) => state.settings.signUpCredentials.firtname
  );
  const lastname = useAppSelector(
    (state) => state.settings.signUpCredentials.lastname
  );

  const isLoading = useAppSelector((state) => state.settings.isLoading);
  const message = useAppSelector((state) => state.settings.message);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeField =
    (name: 'email' | 'password' | 'firstname' | 'lastname') =>
    (value: string) => {
      useAppDispatch(
        changeSignUpCredentialsField({
          field: name,
          value,
        })
      );
    };

  return (
    <div className="relative flex flex-col gap-4 z-10 p-10 w-80 text-thirdff bg-bgff rounded-xl shadow-xl items-center p-6">
      <h1 className="text-3xl font-bold text-center "> Sign-up</h1>
      <div className="flex flex-col text-center">
        <p className="text-base ">Already registered ?</p>
        <p className="text-base underline underline-offset-2">Sign-in !</p>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Field
          label="Firstname"
          onChange={handleChangeField('firstname')}
          value={firstname}
        />
        <Field
          label="Lastname"
          onChange={handleChangeField('lastname')}
          value={lastname}
        />
        <Field
          label="E-mail"
          onChange={handleChangeField('email')}
          value={email}
        />
        <Field
          label="Password"
          onChange={handleChangeField('password')}
          value={password}
        />

        <div className="flex justify-center ">
          <button
            type="submit"
            className="text-2xl font-bold pt-1 pr-1 pb-2 pl-2  border-fourthff rounded-lg border-2 h-8 shadow-md hover:shadow-xl ease-in duration-150 w-7/12 h-full"
            disabled={isLoading}
          >
            Sign-up
          </button>
        </div>
      </form>
      <button
        type="button"
        className="fixed hidden rounded-full border-2 w-12 h-12 mt-2"
        // onClick={handleClickToggle}
      >
        <X className="w-12 h-12" />
      </button>
    </div>
  );
}

export default signup;
