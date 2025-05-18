import { cn } from "@/lib/utils";
import { Container, Head, Html, Tailwind, Text } from "@react-email/components";
import { Section, Row, Column, Img, Link } from "@react-email/components";

const EmailLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#000000",
                background: "#f0f0f0",
                background2: "#ffffff",
              },
            },
          },
        }}
      >
        <Container className="bg-background p-2">
          <Header />

          <Section className={cn("bg-background2 p-2 rounded-lg", className)}>
            {children}
          </Section>

          <Footer />
        </Container>
      </Tailwind>
    </Html>
  );
};

const Header = () => {
  return (
    <Section className="my-[40px] px-[32px] py-[40px]">
      <Row>
        <Column className="w-[80%]">
          <Img
            alt="React Email logo"
            height="42"
            src="https://react.email/static/logo-without-background.png"
          />
        </Column>
        <Column align="right">
          <Row align="right">
            <Column className="px-[8px]">
              <Link className="text-gray-600 [text-decoration:none]" href="#">
                About
              </Link>
            </Column>
            <Column className="px-[8px]">
              <Link className="text-gray-600 [text-decoration:none]" href="#">
                Company
              </Link>
            </Column>
            <Column className="px-[8px]">
              <Link className="text-gray-600 [text-decoration:none]" href="#">
                Blog
              </Link>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section className="text-center">
      <table className="w-full">
        <tr className="w-full">
          <td align="center">
            <Img
              alt="React Email logo"
              height="42"
              src="https://react.email/static/logo-without-background.png"
            />
          </td>
        </tr>
        <tr className="w-full">
          <td align="center">
            <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
              Acme corporation
            </Text>
            <Text className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
              Think different
            </Text>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Row className="table-cell w-[56px] h-[44px] align-bottom">
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="Facebook"
                    height="36"
                    src="https://react.email/static/facebook-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="X"
                    height="36"
                    src="https://react.email/static/x-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column>
                <Link href="#">
                  <Img
                    alt="Instagram"
                    height="36"
                    src="https://react.email/static/instagram-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
            </Row>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Text className="my-[8px] font-semibold text-[16px] text-gray-500 leading-[24px]">
              123 Main Street Anytown, CA 12345
            </Text>
            <Text className="mt-[4px] mb-0 font-semibold text-[16px] text-gray-500 leading-[24px]">
              mail@example.com +123456789
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
};

export default EmailLayout;
