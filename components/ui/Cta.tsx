import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Study in your way.</div>
      <h2 className="text-3xl font-bold">
        Discover the knowledge of companions
      </h2>
      <p>
        Pick your companion you want to learn and learning through voices conversation that motivates your mind.
      </p>
      <Image src="images/cta.svg" alt="Cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build A New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;
