import React from 'react'
import CompanionsCards from "@/components/ui/CompanionsCards";
import CompanionsList from "@/components/ui/CompanionsList";
import Cta from "@/components/ui/Cta";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="home-section">
          <CompanionsCards
            id = "123"
            name = "Newra the Brainy Explorer"
            topic = "Neural Network of the Brain"
            subject = "Puzzle"
            duration = {45}
            color = "#FFCC00"
          />
          <CompanionsCards
            id = "456"
            name = "County the Number Wizard"
            topic = "Neural Network of the Brain"
            subject = "Math"
            duration = {30}
            color = "#33CC66"
          />
          <CompanionsCards
            id = "789"
            name = "Gramsy the Grammar Magic"
            topic = "Pronouncing and Writing"
            subject = "Vocabulary"
            duration = {30}
            color = "#bde7ff"
          />
        </section>

        <section className="home-section">
          <Cta/>
          <CompanionsList
            title = "Recent Completed Sessions"
            companions = {recentSessions}
            classNames = "w-2/3 max-lg:w-full"
          />
        </section>
      </main>

  )
}

export default Page