import { Text } from "@react-email/components";
import EmailLayout from "./layout";

const OnboardingTemplate = () => {
  return (
    <EmailLayout>
      <Text>
        Welcome to our platform! We are excited to have you on board. Let&#39;s
        get started with a quick tour.
      </Text>
      <Text>
        First, let&#39;s set up your profile. Click on the profile icon in the
        top right corner and fill in your details.
      </Text>
      <Text>
        Next, explore our features and start using our platform to its full
        potential. If you have any questions, our support team is here to help.
      </Text>
    </EmailLayout>
  );
};
export default OnboardingTemplate;
