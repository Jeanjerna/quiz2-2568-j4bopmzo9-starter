import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer";
export default function Footer(prop:FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        {`© ${prop.fullName} ${prop.studentId} ${prop.courseName}-${prop.year}. All rights reserved.`}
      </Text>
    </Group>
  );
}
