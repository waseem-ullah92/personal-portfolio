import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ReturnTypes {
  onSubmit?: (data: any) => void;
  handleSubmit?: any;
  methods: any;
}

const defaultValues = {
  goalName: "",
  description: "",

}

const contactUsForm = Yup.object().shape({
  goalName: Yup.string().trim().
    required("Field is required").min(4).max(30),
});

export function useContact(): ReturnTypes {
  const methods = useForm<any>({
    resolver: yupResolver(contactUsForm),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = (formValues: any) => {
    // handle form submission
  };

  return {
    onSubmit,
    handleSubmit,
    methods
  };
}
