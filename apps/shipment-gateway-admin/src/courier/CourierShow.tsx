import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURIER_TITLE_FIELD } from "./CourierTitle";

export const CourierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Billing Address" source="billingAddress" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Shipment"
          target="courierId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivery Address ID" source="deliveryAddressId" />
            <TextField label="ID" source="id" />
            <TextField label="Order Item" source="orderItem" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
