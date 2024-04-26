"use client";
import { Button } from "@/components/ui/button";
import { createUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const handleCreateUser = async () => {
  //   const user = await createUser({
  //     clerkId: "user_2fe95Asu0LnzLTfx7zPhlsGszqA",
  //     email: "aurdadevelops@gmail.com",
  //     username: "aurda",
  //     firstName: "Alfredo",
  //     lastName: "Dev",
  //     photo:
  //       "https://dashboard.clerk.com/_next/image?url=https%3A%2F%2Fimg.clerk.com%2FeyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZmU5NUU4S2dLbng5d0NwbGZvN0JXQVZVbUkifQ&w=1920&q=75",
  //   });
  //   console.log({ user });
  // };
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: All Your Events in One Place!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Create, host, and manage all your events in one place. From
              concerts to business events, EventSync has you covered.
            </p>
            <Button
              size="lg"
              asChild
              className="button w-full sm:w-fit"
              // onClick={handleCreateUser}
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>
      </section>
    </>
  );
}
