'use client';
import { CarouselCard } from '@/components/CarouselCard';
import styles from './Home.module.css';
import { ThreeAnimation } from '@/components/ThreeJS/ThreeAnimation';
import { solar_system } from '@/constants/solar_system';
import { useState } from 'react';

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('/assets/sun.jpg' as string);
  return (
    <main>
      <h2 className={styles.carousel_title}>Click on one of the elements</h2>
      <section className={styles.carousel}>
        <div className={styles.carousel__container}>
          {solar_system.map((planet) => (
            <CarouselCard
              key={planet.id}
              title={planet.title}
              classNameItem={styles.carousel__item}
              classNameDetails={styles.carousel__item_details}
              src={planet.src}
              alt={planet.alt}
              width={planet.width}
              height={planet.height}
              onClick={() => setSelectedPlanet(planet.texture)}
            />
          ))}
        </div>
      </section>
      <div className={styles.flex_container}>
        <ThreeAnimation texture={selectedPlanet} />
      </div>
    </main>
  );
}
