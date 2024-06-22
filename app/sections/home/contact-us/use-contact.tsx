import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ReturnTypes {
  onSubmit?: (data: any) => void;
  handleSubmit?: any;
  methods: any;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  description: "",

}

const contactUsForm = Yup.object().shape({
  firstName: Yup.string().trim().
    required("Field is required").min(5).max(30),
    lastName: Yup.string().trim().
    required("Field is required").min(5).max(30),
    email: Yup.string().email().trim().
    required("Field is required"),
    phoneNumber: Yup.string().trim().
    required("Field is required"),
    description: Yup.string().trim().
    required("Field is required")
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
