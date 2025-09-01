const Check = ({ last }) => (
  <li
    className={`flex ${last
      ? ''
      : "w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-bl"
      } items-center text-third`}
  >
    <span className='flex items-center justify-center w-10 h-10 bg-third rounded-md lg:h-12 lg:w-12 shrink-0'>
      <svg
        aria-hidden='true'
        className='w-5 h-5 text-white lg:w-6 lg:h-6'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </span>
  </li>
);
const Stepper = ({ step }) => {
  return (
    <div className='w-full mx-auto flex justify-center'>
      <ol className='flex items-center w-full'>
        <Check />
        {/*         {step > 0 ? (
          <Check />
        ) : (
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <span className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 lg:w-6 lg:h-6 '
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </li>
        )} */}
        {step === 1 ? (
          <Check last />
        ) : (
          <li className='flex items-center'>
            <span className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md lg:h-12 lg:w-12 shrink-0'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 lg:w-6 lg:h-6-100'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </li>
        )}
      </ol>
    </div>
  );
};

export default Stepper;
