import { useState } from "react";
import {
  // Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  // Stack,
  Group,
  Box,
  type ComboboxItem,
} from "@mantine/core";
// import { v4 as uuidv4 } from "uuid";

// type AddFoodModalProps = {
//   opened: boolean;
//   onClose: () => void;
//   onAdd: (
//     name: string,
//     price: number | string,
//     quantity: number | string,
//     category: string
//   ) => void;
// };

export default function AddFoodModal() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<ComboboxItem | null>(null);

  const handleSubmit = () => {
    if (name.trim()) {
      // const FoodItem = {
      //   id: uuidv4(),
      //   name: name,
      //   price: price,
      //   quantity: quantity,
      //   category: category,
      // };
    }
  };

  const nameChanged = (event: any) => {
    setName(event.target.value);
  };

  const priceChanged = (event: any) => {
    setPrice(Number(event.val_number));
  };

  const quantityChanged = (event: any) => {
    setQuantity(Number(event.val_number));
  };

  // const categoryChanged = (event: any) => {
  //   setCategory(event.target.value);
  // };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Group gap="xl">
      <Box>
        <TextInput
          label="Name of item"
          description="Name of item"
          placeholder="e.g. Chicken"
          onChange={nameChanged}
          value={name}
          error={name === "" ? "Name of item is required" : ""}
        />

        <NumberInput
          label="Price per dish"
          description="Price per dish"
          defaultValue={0}
          onChange={priceChanged}
          // value={price}
          error={
            price === 0 || price === "" ? "Price per dish is required" : ""
          }
        />

        <NumberInput
          label="Quantity"
          description="Quantity"
          defaultValue={0}
          onChange={quantityChanged}
          // value={quantity}
          error={
            quantity === 0 || quantity === "" ? "Quantity is required" : ""
          }
        />

        <Select
          label="Category"
          description="Category"
          placeholder="Slect Category"
          data={["Main Course", "Drink", "Desert"]}
          onChange={(_value, option) => setCategory(option)}
          error={category === null ? "Category is required" : ""}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Group>
  );
}
