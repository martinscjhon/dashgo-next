import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  textLink: string;
  href: string;
}

export function NavLink({ icon, textLink, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {textLink}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
