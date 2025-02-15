import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/CardsCarousel.module.css';

export default function CardsCarousel() {
  // Your original array of 4 cards
  const cardsData = [
    {
      id: 1,
      numberIcon: '/icons/one.png',
      imageSrc: '/images/Join.png',
      title: 'Join',
      description: 'Some text about step one, or a testimonial, etc.',
    },
    {
      id: 2,
      numberIcon: '/icons/two.png',
      imageSrc: '/images/Swipe.png',
      title: 'Swipe',
      description: 'Some text about step two, or a testimonial, etc.',
    },
    {
      id: 3,
      numberIcon: '/icons/three.png',
      imageSrc: '/images/Meet.png',
      title: 'Meet',
      description: 'Another piece of text describing this step, etc.',
    },
    {
      id: 4,
      numberIcon: '/icons/four.png',
      imageSrc: '/images/succeed.png',
      title: 'Succeed',
      description: 'More text, e.g. a testimonial or an explanation.',
    },
  ];

  const n = cardsData.length;
  // Repeat the entire array 3 times => 3n total items
  const repeatedCards = [...cardsData, ...cardsData, ...cardsData];

  // We start in the middle copy => index = n * 1
  // i.e. the first item of the second copy
  const [currentIndex, setCurrentIndex] = useState(n);

  // Control whether the slide is animated or instant
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const trackRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Clicking a half-shown card
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  // We’ll detect “transitionend” to see if we must snap back to the middle copy
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = (e) => {
      if (e.propertyName !== 'transform') return;

      // If we scrolled too far right => e.g. currentIndex >= 2n + something
      if (currentIndex >= 2*n + n) {
        // We'll never realistically go that far with a single step, 
        // but let's be safe with the logic. 
      }

      // The main checks: 
      //  - If user advanced beyond the middle copy to the right
      //    e.g. currentIndex >= 2n => we move back by n
      //  - If user advanced left beyond the middle copy
      //    e.g. currentIndex < n => we move forward by n
      if (currentIndex >= 2*n) {
        // e.g. if n=4 and currentIndex=8 => we jumped to the last copy
        // we want an instant jump back to currentIndex- n (which is 4)
        jumpWithoutTransition(currentIndex - n);
      } else if (currentIndex < n) {
        // we jumped to the first copy => instantly jump forward by n
        jumpWithoutTransition(currentIndex + n);
      }
    };

    track.addEventListener('transitionend', onTransitionEnd);
    return () => {
      track.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [currentIndex, n]);

  // Instant jump => no transition => reset index => re-enable transitions
  const jumpWithoutTransition = (targetIndex) => {
    setIsTransitionEnabled(false);
    setCurrentIndex(targetIndex);
    // Double rAF or short setTimeout to restore transitions
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  // Each card is 60vw => offset is currentIndex * 60
  const translateValue = -currentIndex * 30;

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={handlePrev}>
        &larr;
      </button>

      <div className={styles.carouselViewport}>
        <div
          ref={trackRef}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(${translateValue}vw)`,
            transition: isTransitionEnabled ? 'transform 0.4s ease' : 'none',
          }}
        >
          {repeatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={styles.card}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.cardImage}>
                <img src={card.imageSrc} alt={`Card ${card.id}`} />
              </div>
              <div className={styles.cardContent}>
                 <div className={styles.cardContentTopHalf}>
                <img
                  src={card.numberIcon}
                  alt={`Number ${card.id}`}
                  className={styles.numberIcon}
                />
                <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.navButton} onClick={handleNext}>
        &rarr;
      </button>
    </div>
  );
}
