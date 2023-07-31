import { useAppSelector } from '../../hooks/redux';

function AboutUsPage() {
  const modalIsOpen = useAppSelector((state) => state.settings.modalIsOpen);

  return (
    <div
      className={`bg-bgff relative mb-20 ${
        modalIsOpen ? 'sm:blur-[3px] sm:pointer-events-none' : ''
      } `}
    >
      <div className="min-h-screen bg-bgff py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-titleff mb-8">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="/about.jpg"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <article className="md:order-first">
              <h2 className="text-2xl font-semibold text-titleff mb-4">
                Our Story
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Welcome to the utterly wacky and delightfully offbeat world of
                "Geek-Chefs"! We are a team of five high-spirited developers:
                Jonathan, the keyboard genius who codes while dancing the
                Macarena; Maryam, the algorithm expert who juggles virtual
                vegetables like a pro; Romain, the maestro of amusing bugs who
                turns errors into unique culinary creations; Mathilde, the queen
                of quirky recipes who skillfully blends improbable ingredients;
                and Gabriele, the virtuoso of cheerful interfaces that make
                cooking as playful as a video game!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                We had an epiphany while seeking a creative way to combine our
                passion for coding with our love for cooking. And behold the
                brilliant idea that hit us like a snowball in summer: creating
                an incredibly fun app to plan your meals and discover recipes as
                wild and wonderful as you are! Say goodbye to dull and
                conventional dishes, and embrace meals that will make your taste
                buds and funny bones explode with happiness!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                With us, cooking becomes a thrilling adventure where imagination
                knows no bounds. Our mischievous robot chefs and playful lines
                of code team up to whip up dishes that are both impressive and
                delicious. From flying pancakes to dancing pizzas, and cakes
                that sing, nothing is too crazy for our unleashed team!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                And our team meetings? They are a true circus show! Juggling
                with vegetables, fiery debates on the best culinary libraries,
                and lively dance contests to debug technical issues – we never
                have a dull moment as Geek-Chefs!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                So, if you have an appetite for adventure and dream of pushing
                the boundaries of traditional cooking, join us in this merry
                adventure of the Geek-Chefs! Together, we will revolutionize
                your meals and introduce you to a flavorful and laughter-filled
                universe where code and cooking go hand in hand!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Beware, get ready for bursts of laughter, unprecedented culinary
                discoveries, and delightful moments of sharing with the
                Geek-Chefs. With us, each day is a celebration where the passion
                for code and the love for cooking come together to create
                unforgettable memories!
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                So, are you ready to dive into the zany cauldron of the
                Geek-Chefs? Strap on your aprons and put on your coding glasses,
                because it's going to be an incredibly wild and hilariously
                funny adventure! We eagerly await your arrival for a culinary
                experience that's vibrant and full of laughter!
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
