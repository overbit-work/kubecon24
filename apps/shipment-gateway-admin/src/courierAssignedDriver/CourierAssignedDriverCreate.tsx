import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CourierTitle } from "../courier/CourierTitle";

export const CourierAssignedDriverCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
