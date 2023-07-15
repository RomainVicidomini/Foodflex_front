import { FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, User, Key } from 'react-feather';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Field from './Field/Field';
import { editInfoProfil, logout } from '../../store/reducers/settings';

function Profil() {
  const [editProfil, setEditProfil] = useState(false);

  function handleEditProfil() {
    setEditProfil(!editProfil);
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmitEditProfil(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    dispatch(editInfoProfil(formData));
    setEditProfil(!editProfil);
  }

  function handleLogout() {
    dispatch(logout());
    // Redirection to HomePage
    navigate('/');
  }

  const { firstName, lastName, email, password } = useAppSelector(
    (state) => state.settings.currentUser
  );

  return (
    <div className="container p-3 px-4">
      <div className="flex justify-center mb-6">
        <NavLink
          to="/favoris"
          className={({ isActive }) =>
            isActive
              ? 'btn rounded-3xl  w-28 shadow-lg text-red-600'
              : 'btn rounded-3xl  w-28 shadow-lg'
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/profil"
          className={({ isActive }) =>
            isActive
              ? 'ml-10 btn rounded-3xl  w-28 shadow-lg text-red-600'
              : 'ml-10 btn rounded-3xl  w-28 shadow-lg'
          }
        >
          Profil
        </NavLink>
      </div>

      <div className="flex bg-bgff border rounded-2xl mx-8 pt-8 pb-6 px-4">
        <form onSubmit={handleSubmitEditProfil}>
          {editProfil ? (
            <>
              <div className="flex mb-6">
                <User className="mr-2" />
                <Field
                  name="firstName"
                  label="Firstname :"
                  value={firstName.trim()}
                />
              </div>
              <div className="flex mb-6">
                <User className="mr-2" />
                <Field
                  name="lastName"
                  label="Lastname :"
                  value={lastName.trim()}
                />
              </div>
              <div className="flex mb-6">
                <Mail className="mr-2" />
                <Field name="email" label="Mail :" value={email.trim()} />
              </div>
              <div className="flex mb-6">
                <Key className="mr-2" />
                <Field
                  name="password"
                  label="Password :"
                  value={password.trim()}
                />
              </div>

              <button
                type="submit"
                className="btn rounded-3xl w-28 ml-16 shadow-lg"
              >
                Confirmed
              </button>
            </>
          ) : (
            <>
              <p className="flex mb-8">
                <User className="mr-2" /> Name : {firstName} {lastName}
              </p>
              <p className="flex mb-8">
                <Mail className="mr-2" />
                Mail : {email}
              </p>
              <p className="flex mb-8">
                <Key className="mr-2" />
                Password : *********
              </p>
            </>
          )}
        </form>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="btn text-sm rounded-3xl text-black w-32 shadow-lg mr-5"
          onClick={() => handleEditProfil()}
        >
          {editProfil ? 'Cancelled' : 'Edit Profil'}
        </button>
        <button
          type="button"
          className="btn rounded-3xl text-black w-32 h-1 shadow-lg"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profil;
