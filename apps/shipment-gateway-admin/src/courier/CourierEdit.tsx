import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const CourierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Billing Address" source="billingAddress" />
        <TextInput label="Country" source="country" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="shipments"
          reference="Shipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShipmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
