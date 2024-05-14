"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { createClient } from "@supabase/supabase-js";
import CheckboxTile from "./ui/checkboxtile";

const supabase = createClient(
  "https://qxxsilydcykxsgfvfvvz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4eHNpbHlkY3lreHNnZnZmdnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MTIsImV4cCI6MjAxMjQyNzUxMn0.XhVtrw5oL-uS_xjTWDhjvePBXTWqN5qrevhCh9XjUSQ"
);

const areas = [
  {
    name: "Innovation og skalering",
    key: "innovation",
  },
  {
    name: "Dokumentation",
    key: "dokumentation",
  },
  {
    name: "Forretningsudvikling",
    key: "forretningsudvikling",
  },
  {
    name: "Kommunikation",
    key: "kommunikation",
  },
  {
    name: "Forandring",
    key: "forandring",
  },
  {
    name: "Andet",
    key: "andet",
  },
];

export default function FormSetup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (key, isChecked) => {
    setCheckedItems({ ...checkedItems, [key]: isChecked });
  };

  const [submitting, setSubmitting] = useState(false);

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true); // Set submitting state to true

      // Send form data to SupaBase
      const { data: formData, error } = await supabase
        .from("ib-contact-form")
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            description: data.description,
            area: Object.keys(data.checkedItems)
              .filter((key) => data.checkedItems[key])
              .join(", "),
          },
        ]);

      if (error) {
        throw error;
      }

      // Prepare the email message
      const msg = {
        to: data.email, // Send the email to the user who filled the form
        from: "emil00y1@stud.kea.dk", // Make sure this is a verified sender email in SendGrid
        subject: "Confirmation of Data Submission",
        text: `Hello ${data.name}, thank you for your submission. We have received your details.`,
        html: `<strong>Hello ${data.name},</strong><p>Thank you for your submission. We have received the following details:</p><ul><li>Email: ${data.email}</li><li>Phone: ${data.phone}</li><li>Description: ${data.description}</li><li>Interest Areas: ${data.area}</li></ul>`,
      };

      // Send the email
      await sgMail.send(msg);
      console.log("Email sent");
    } catch (error) {
      console.error(
        "Error submitting form data or sending email:",
        error.message
      );
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };

  return (
    <>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <fieldset>
            <legend>Hvad kan vi hjælpe dig med?</legend>
            <div className="flex gap-3 mt-4">
              {areas.map((area) => (
                <CheckboxTile
                  {...register(area.name)}
                  key={area.key}
                  checked={checkedItems[area.key] || false}
                  onChange={(isChecked) =>
                    handleCheckboxChange(area.key, isChecked)
                  }
                >
                  {area.name}
                </CheckboxTile>
              ))}
            </div>
          </fieldset>
          <div className="flex gap-2.5">
            <div>
              <Label htmlFor="name">Navn*</Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p role="alert">Indtast navn</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">E-mail*</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p role="alert">Indtast korrekt e-mail</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Telefonnummer*</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Telefonnummer er påkrævet",
                  minLength: {
                    value: 8,
                    message: "Telefonnummeret skal være mindst 8 tegn",
                  },
                })}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && <p role="alert">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="description">Besked*</Label>
            <Textarea
              id="description"
              {...register("description", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Beskeden er for kort",
                },
                maxLength: {
                  value: 250,
                  message: "Beskeden er for lang",
                },
              })}
            />
            {errors.description && (
              <p role="alert">{errors.description.message}</p>
            )}
          </div>
          {/* {errors.name && <span>This field is required</span>} */}
          <div>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Sender..." : "Send"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
