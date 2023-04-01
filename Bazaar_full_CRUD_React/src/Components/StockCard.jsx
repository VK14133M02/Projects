import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

const StockCard = (ele) => {
  const {
    company_logo,
    company_name,
    company_type,
    stock_exchange,
    total_shares,
    cost_per_share,
    price_action,
  } = ele;
  return (
    <Card maxW="sm" border={"1px solid red"}>
      <CardBody>
        <Image
          src={company_logo}
          alt={company_name}
          borderRadius="lg"
          width={"100%"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{company_name}</Heading>
          <Text>{company_type}</Text>
          <Text>{stock_exchange}</Text>
          <Text>{total_shares}</Text>
          <Text>{total_shares}</Text>
          <Text color="blue.600" fontSize="2xl">
            ₹{Number(cost_per_share)}
          </Text>
          <Text>{price_action}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StockCard;
