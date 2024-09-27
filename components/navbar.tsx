import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import GithubIcon from "./githubIcon";
import LinkedinIcon from "./linkedinIcon";
import { siteConfig } from "@/config/site";

export default function AppNav() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="app-logo text-inherit tracking-[4px] font-light text-sm">George Kalyvianakis</p>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-1">
        <NavbarItem>
          <Link href={siteConfig.links.github} isExternal>
            <GithubIcon />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={siteConfig.links.linkedin} isExternal>
            <LinkedinIcon />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}