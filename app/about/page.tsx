import Accordion from "@/components/Accordion";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="font-semibold text-xl text-darkerGray select-none">About</p>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <p className="w-full lg:w-1/2 font-regular text-base text-darkerGray select-none">
          Welcome to Live Tennis ELO Ratings, your ultimate destination for
          men&apos;s professional tennis statistics. Our mission is to immerse
          tennis enthusiasts in the world of tennis with a comprehensive suite
          of stats and ratings, enabling you to track your favorite players,
          compare their performances against rivals, and delve deep into the
          game&apos;s nuances—all within a sleek and modern interface. <br></br>
          <br></br>Designed for ease of use and depth of insight, our platform
          stands as a testament to our dedication to enriching your tennis
          experience. Here, every statistic tells a story, allowing you to
          appreciate the sport&apos;s intricacies in a way that is both
          enjoyable and intuitive. Explore the richness of tennis with Live
          Tennis ELO Ratings, where we bring the game closer to you.
        </p>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-2">
          <Image
            src="/assets/about.jpg"
            alt="tennis"
            width={400}
            height={400}
            className="w-full h-[340px] rounded-lg"
          />
          <p className="text-xs text-gray">
            Photo by{" "}
            <a
              href="https://unsplash.com/@shep979?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              className="hover:underline"
            >
              Shep McAllister
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/two-person-playing-tennis-J1j3cImjmgE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 pt-4 border-t border-gray">
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <p className="font-semibold text-xl text-darkerGray">
            Frequently Asked Questions (FAQs)
          </p>
          <div className="flex flex-col gap-2">
            <Accordion title='Why is the website called "Tenelos"?'>
              &quot;Tenelos&quot; is derived from combining &quot;Tennis&quot;
              with the Elo rating system, inspired by the chess ratings
              developed by Professor Arpad Elo. Our website specializes in
              updating unique ELO ratings for tennis on Hard, Clay, and Grass
              surfaces, much like the official ATP Rankings.
            </Accordion>
            <Accordion title="What records can be found on Tenelos?">
              Our database includes official tournament results starting from
              1976 and extends back to the beginning of the Open Era in 1968. We
              are actively working to upload all ELO files since 1968, allowing
              users to check weekly rankings on all surfaces, live ELO rankings,
              and Official ATP Rankings.
            </Accordion>
            <Accordion title="How can I compare players on Tenelos?">
              The H2H page allows for the comparison of two players&apos; ELO
              performances overall (across all surfaces) and on individual
              surfaces. You can also compare players&apos; ranks and ratings,
              even by age, to analyze their careers in depth.
            </Accordion>
            <Accordion title='What are the "Last 10 Hot Performances"?'>
              This feature showcases the players with the best ELO performance
              in their last 10 matches played, highlighting those who are
              currently in top form.
            </Accordion>
            <Accordion title='What does "Top 15&apos;s All-Time" feature include?'>
              The Top 15&apos;s All-Time feature lists players&apos; peak
              performances overall and their best ELO on the three main
              surfaces: Hard, Clay, and Grass. It also includes official peak
              ATP points standings and an average column to show average peak
              performance across surfaces, accommodating the variance in the
              number of matches played on each surface.
            </Accordion>
            <Accordion title="How does a player get included in the Tenelos database?">
              To be included, players must win against a rated opponent in an
              official ATP tournament. Our ELO system awards points based on
              match outcomes and set scores, with minimum ELO requirements set
              for different tournaments. For example, reaching the second round
              of an ATP (250) tournament usually awards 2450 ELO, while winning
              such a tournament awards a minimum of 2625 ELO, equivalent to a
              Chess Grandmaster&apos;s norm.
            </Accordion>
            <Accordion title="What is the source of your statistical data?">
              Our site&apos;s statistical data originate from the personal data
              records of Tomasz Kosinski, which detail all the ELO ratings of
              tennis players with a minimum of 2400 ELO rating. These records
              date back to 1968, providing a comprehensive historical overview
              of tennis player performances based on a minimum ELO rating
              influenced by Chess ELO ratings.
            </Accordion>
            <Accordion title="Why are some ATP points not included in your data?">
              Some ATP points are not covered in Tomasz Kosinski&apos;s records.
              To complement our data, we extract the ATP points of each player
              from Jeff Sackmann&apos;s open-source tennis data repository. This
              approach ensures we offer a complete and up-to-date statistical
              analysis of players&apos; performances.
            </Accordion>
            <Accordion title="How frequently is the data on Live Tennis ELO Ratings updated?">
              The data on Live Tennis ELO Ratings is updated weekly, reflecting
              the newest rankings and performances of players. This ensures our
              users have access to the most current information to track changes
              in player rankings and performance metrics over time.
            </Accordion>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col p-4 gap-4 border border-gray rounded-lg">
          <p className="font-semibold text-xl text-darkerGray select-none">
            Tennis Rating Guide
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-darkerGray text-sm font-medium uppercase">
                ATP Ranking
              </p>
              <p className="text-sm text-darkerGray">
                A player&apos;s ranking is determined by their performance in
                Grand Slams, ATP Tour and Challenger Tournaments, 25K ITF
                tournaments, and 15K ITF Tournaments. The player&apos;s ranking
                is based on their best 16 results during a calendar year. The
                points for a tournament will count towards a player&apos;s
                ranking for a total of 52 weeks following the result.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-darkerGray text-sm font-medium uppercase">
                ELO Ranking
              </p>
              <p className="text-sm text-darkerGray">
                The principle behind any Elo system is that each player&apos;s
                rating is an estimate of their strength, and each match (or
                tournament) allows us to update that estimate. If a player wins,
                his rating goes up; if he loses, it goes down. Where Elo excels
                is in determining the amount by which a rating should increase
                or decrease. There are two main variables that are taken into
                account: How many matches are already in the system (that is,
                how much confidence we have in the pre-match rating), and the
                quality of the opponent.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-darkerGray text-sm font-medium uppercase">
                Player Matches
              </p>
              <p className="text-sm text-darkerGray">
                Starting from 2022 US OPEN, all ELO Ratings will be calculated
                based on the player&apos;s current ELO before the match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
