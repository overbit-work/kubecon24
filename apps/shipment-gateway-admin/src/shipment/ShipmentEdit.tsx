import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourierTitle } from "../courier/CourierTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <TextInput label="Delivery Address ID" source="deliveryAddressId" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
