import React, { useEffect } from 'react';

export default function CardBooks() {
  useEffect(() => {
    const carousel = document.querySelector('.flex');
    const leftButton = document.querySelector('.absolute.left-0');
    const rightButton = document.querySelector('.absolute.right-0');

    leftButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
      carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }, []);

  return (<>      <h2 className="text-3xl font-bold bg-[#0077b6] text-foreground text-center sm:text-4xl">
  E-<span className="text-yellow-400 ">Book</span>  
  </h2>
    <div className="relative w-full  ">
      <div className="flex overflow-x-scroll space-x-4 bg-[#0077b6] p-4">
        <div className="min-w-[200px]  bg-card p-4 rounded-lg bg-white shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="The Foreign Handler"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">The Foreign Handler</h3>
          <p className="text-muted-foreground text-sm">by Author 1 • 2 reviews</p>
          <p className="text-primary mt-1">12.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="The Asian Markets"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">The Asian Markets</h3>
          <p className="text-muted-foreground text-sm">by Author 2 • 3 reviews</p>
          <p className="text-primary mt-1">14.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Ship Wreck"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Ship Wreck</h3>
          <p className="text-muted-foreground text-sm">by Author 3 • 4 reviews</p>
          <p className="text-primary mt-1">10.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Cross Fit Paleo"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Cross Fit Paleo</h3>
          <p className="text-muted-foreground text-sm">by Author 4 • 5 reviews</p>
          <p className="text-primary mt-1">12.00€</p>
        </div>
        <div className="min-w-[200px]  bg-white bg-card p-4 rounded-lg shadow-lg">
          <img
            src="https://placehold.co/150x200?text=Book+Cover"
            alt="Rumors Madness"
            className="w-full h-auto rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-foreground">Rumors Madness</h3>
          <p className="text-muted-foreground text-sm">by Author 5 • 6 reviews</p>
          <p className="text-primary mt-1">8.00€</p>
        </div>
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full shadow-lg">
        <img alt="left-arrow" src="https://openui.fly.dev/openui/24x24.svg?text=◀" />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full shadow-lg">
        <img alt="right-arrow" src="https://openui.fly.dev/openui/24x24.svg?text=▶" />
      </button>
    </div></>
  );
}
