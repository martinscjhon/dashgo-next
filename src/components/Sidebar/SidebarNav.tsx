import { Stack } from "@chakra-ui/react";
import { NavSession } from "./NavSession";
import { NavLink } from "./NavLink";
import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSession
        title={"GERAL"}
        children={
          <>
            <NavLink
              icon={RiDashboardLine}
              textLink="Dashboard"
              href="/dashboard"
            />
            <NavLink icon={RiContactsLine} textLink="Usuários" href="/users" />
          </>
        }
      />

      <NavSession
        title={"AUTOMAÇÃO"}
        children={
          <>
            <NavLink
              icon={RiInputMethodLine}
              textLink="Formulários"
              href="/forms"
            />
            <NavLink
              icon={RiGitMergeLine}
              textLink="Automação"
              href="/automation"
            />
          </>
        }
      />
    </Stack>
  );
}
