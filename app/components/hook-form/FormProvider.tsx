// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

export default function FormProvider({ children, onSubmit, methods }: any) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={{overflow:"hidden"}}>{children}</form>
    </Form>
  );
}
