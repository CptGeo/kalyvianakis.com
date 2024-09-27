"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Get my&nbsp;</span>
          <span className={title({ color: "violet" })}>CV&nbsp;</span>
          <br />
          <span className={title()}>
            following the link below
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Or check out my <span className={title({color: "blue", size: "sm"})}>GitHub</span> profile
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.cv}
          >
            CV document
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}>
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
