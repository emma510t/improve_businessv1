"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { supabase } from "../lib/supabaseclient";
import CheckboxTile from "./ui/checkboxtile";
import FormError from "./ui/formError";
import { H3, P } from "./ui/fonts";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mail, setMail] = useState("");

  const onSubmit = async (data) => {
    try {
      setSubmitting(true); // Set submitting state to true
      setMail(data.email);

      // Send form data to SupaBase
      const { data: formData, error } = await supabase
        .from("ib-contact-form")
        .insert([
          {
            // Map form data to your table columns
            name: data.name,
            email: data.email,
            phone: data.phone,
            description: data.description,
            area: Object.keys(checkedItems)
              .filter((key) => checkedItems[key])
              .join(", "),
            // Add other columns as needed
          },
        ]);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    } finally {
      setSubmitting(false);
      setFormSubmitted(true); // Reset submitting state
    }
  };

  return (
    <div className="border-solid border-ibsilver-500 border-t pt-5">
      <Form>
        {formSubmitted ? (
          <>
            <h2 className="font-bold text-2xl pb-4">
              Tak for din henvendelse!
            </h2>
            <P>
              Vi har modtaget din information og kontakter dig inden for 1
              hverdag. Du har modtaget en bekræftelse på{" "}
              <span className="text-ibgreen-400">{mail}</span>
            </P>
            <Button>Tilbage til forsiden</Button>
          </>
        ) : (
          <>
            <P>
              Vi er klar til at hjælpe jer. Udfyld formularen og vi vender
              tilbage snarest!
            </P>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <fieldset>
                <legend className="font-poppins text-ibsilver-600 text-[17px]">
                  Hvad kan vi hjælpe dig med?
                </legend>
                <div className="flex gap-2.5 mt-4 flex-wrap">
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
              <div className="grid md:flex md:gap-2.5 md:flex-wrap">
                <div className="min-[996px]:max-[1520px]:w-[450px]">
                  <Label htmlFor="name">Navn*</Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <FormError>Indtast navn</FormError>
                  )}
                </div>
                <div className="md:flex md:gap-2.5 md:flex-wrap">
                  <div className="mt-4 md:mt-0">
                    <Label htmlFor="email">E-mail*</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === "required" && (
                      <FormError>Indtast korrekt e-mail</FormError>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Label htmlFor="phone">Telefonnummer*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Telefonnummer er påkrævet",
                        minLength: {
                          value: 8,
                          message: "Skriv mindst 8 tegn",
                        },
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <FormError>{errors.phone.message}</FormError>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Besked*</Label>
                <Textarea
                  className="resize-none	"
                  id="description"
                  resize-none
                  {...register("description", {
                    required: "Skriv en besked",
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
                  <FormError>{errors.description.message}</FormError>
                )}
              </div>
              {/* {errors.name && <span>This field is required</span>} */}
              <div>
                <Button hasArrow type="submit" disabled={submitting}>
                  {submitting ? "Sender..." : "Send"}
                </Button>
              </div>
            </form>
          </>
        )}
      </Form>
    </div>
  );
}
