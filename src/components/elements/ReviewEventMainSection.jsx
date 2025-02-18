import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrlForEvent } from 'utils/urls';
import defaultThumbnail from 'assets/ui/thumbnail.png';

const styleClasses = {
  mainSectionContainer: `
    grid
    md:grid-cols-2
    lg:gap-12
    rounded
    mb-4
    lg:mb-16
    bg-white
    grid-cols-none
    text-center
    lg:text-left
    dark:bg-du-deepPurple
  `,
  imageContainer: 'col-span-1',
  eventTypePillbox: 'inline-block mb-4 bg-pink-300 px-8 text-center rounded-lg font-light text-xl font-medium capitalize lg:w-min',
  infoTextSection: 'bg-white p-6 border-slate-300 border-solid border rounded mb-6',
}

function ReviewEventMainSection({ evt, editEvent }) {
  const imageUrl = imageUrlForEvent(evt);

  const handleImageError = (event) => {
    event.target.src = defaultThumbnail;
  }

  return (
    <section>
      <div className="mb-12">
        <p className="text-xl">
          <Link to="/"> &#8592; Back to Results</Link>
        </p>
      </div>

      <div className={styleClasses.mainSectionContainer}>
        <div className={styleClasses.imageContainer}>
          <img src={imageUrl} onError={handleImageError} className="w-full" alt="logo" />
        </div>

        <div className="col-span-1">
          <div className="pt-4">
            <div className="grid lg:grid-cols-2 flex justify-center">
              <div className={styleClasses.eventTypePillbox}>
                { evt.eventType }
              </div>

              {editEvent && (
                <div className="float-right text-right">
                  <button
                    className="p-1 text-white rounded mb-2 mr-2"
                    onClick={editEvent}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="black"
                    >
                      <path
                        d="
                        M17.414 2.586a2 2 0 00-2.828 0L7
                        10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z
                      "
                      />
                      <path
                        fillRule="evenodd"
                        d="
                        M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1
                        1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z
                      "
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <h1 className="font-bold text-xl md:text-3xl mb-4 dark:text-slate-50">
              { evt.eventName }
            </h1>

            <h2 className="mb-2 dark:text-slate-50">
              { evt.organizationName }
            </h2>
          </div>

          <div>
            <div className="bg-du-darkBlue text-xl text-center font-medium text-white rounded p-1 m-4 lg:m-0 lg:w-1/2 bottom-0">
              <a href={evt.eventUrl} target="_blank" rel="noreferrer">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewEventMainSection;
