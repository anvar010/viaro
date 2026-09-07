"use server";

import { formSchema } from "./schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  message?: string;
  errors?: {
    fullName?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function send(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    fullName: formData.get("fullName")?.toString() ?? "",
    phone:    formData.get("phone")?.toString()    ?? "",
    email:    formData.get("email")?.toString()    ?? "",
    message:  formData.get("message")?.toString()  ?? "",
  };

  const validated = formSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, phone, message } = validated.data;

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["melany.arias.967806@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      react: (
        <EmailTemplate
          fullName={fullName}
          email={email}
          phone={phone}
          message={message}
        />
      ),
    });

    if (error) {
      return { success: false, message: `${error.name}: ${error.message}` };
    }

    return { success: true };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message ?? "Unknown error, please try again.",
    };
  }
}