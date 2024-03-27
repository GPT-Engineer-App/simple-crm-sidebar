import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import CustomerForm from "../components/CustomerForm";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleAddCustomer = (customerData) => {
    console.log("Customer added:", customerData);

    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Add Customer</Button>
      <CustomerForm isOpen={isOpen} onClose={onClose} onSubmit={handleAddCustomer} />
      {}
    </>
  );
};

export default Index;
