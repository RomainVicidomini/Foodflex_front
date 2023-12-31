import { Plus, Heart } from 'react-feather';
import { Link, redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  addScheduleFavori,
  displaySchedule,
  deleteFavori,
} from '../../../store/reducers/user';
import { Favorite } from '../../../@types/Profil';
import { toggleIsOpenProfil } from '../../../store/reducers/favoris';

interface CardProps {
  favori: Favorite;
}

function FavoriCard({ favori }: CardProps) {
  const clickAddSchedule = useAppSelector(
    (state) => state.settings.clickAddSchedule
  );

  const dispatch = useAppDispatch();

  // Function to handle deleting the favorite item
  function handleDeleteFavori() {
    dispatch(deleteFavori(favori.id));
  }

  // Function to handle toggling the modal
  const handleModaltoggle = () => {
    dispatch(toggleIsOpenProfil());
  };
  // Function to handle adding the recipe to the schedule
  function handleAddSchedule() {
    dispatch(displaySchedule(!clickAddSchedule));
    dispatch(addScheduleFavori(favori));
    return redirect('/schedule');
  }

  return (
    <Link
      to={`/recipes/${favori.idDbMeal}`}
      className="shadow-md rounded-lg relative hover:shadow-lg transition-all"
    >
      <div className="shadow-md rounded-lg relative hover:shadow-lg transition-all">
        <img
          src={favori.image}
          alt={favori.name}
          className="rounded-t-md h-40 object-cover w-full"
        />
        <div className="text-bgff absolute top-2 right-1">
          <div className="card-actions justify-end">
            {/* ------ Button to delete the favori -------- */}
            <button
              aria-label="add meal in favorite"
              type="button"
              className="hover:text-secondaryff transition-all bg-gray-700/50 rounded-full p-1 hover:animate-pulse"
              onClick={(event) => {
                event.preventDefault();
                handleDeleteFavori();
              }}
            >
              <Heart size={20} color="black" fill="red" />
            </button>
            {/*  ------ Button to add the favori to the schedule -------- */}
            <button
              aria-label="add meal in schedule"
              type="button"
              className="hover:text-secondaryff transition-all bg-gray-700/50 rounded-full p-1 transform hover:rotate-90 duration-300"
              onClick={(event) => {
                event.preventDefault();
                handleModaltoggle();
                handleAddSchedule();
              }}
            >
              <Plus size={20} color="red" fill="red" />
            </button>
          </div>
        </div>
        <div className="rounded-b-lg">
          <h2 className="text-fourthff sm:text-bgff p-2 text-center truncate">
            {favori.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default FavoriCard;
