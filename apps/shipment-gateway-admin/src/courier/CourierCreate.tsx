import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CourierAssignedDriverTitle } from "../courierAssignedDriver/CourierAssignedDriverTitle";
import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const CourierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Billing Address" source="billingAddress" />
        <TextInput label="Country" source="country" />
        <ReferenceArrayInput
          source="courierAssignedDrivers"
          reference="CourierAssignedDriver"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourierAssignedDriverTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
