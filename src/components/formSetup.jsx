"use client";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

export default function FormSetup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex gap-4">
            <legend>hvad kan vi hjælpe dig med?</legend>
            <div className="flex items-center space-x-2">
              <Checkbox id="innovation" {...register("check-innovation")} />
              <label
                htmlFor="innovation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Innovation og skalering
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dokumentation"
                {...register("check-dokumentation")}
              />
              <label
                htmlFor="dokumentation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dokumentation
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="forretningsudvikling"
                {...register("check-forretningsudvikling")}
              />
              <label
                htmlFor="forretningsudvikling"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Forretningsudvikling
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="forandring" {...register("check-forandring")} />
              <label
                htmlFor="forandring"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Forandring
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="kommunikation"
                {...register("check-kommunikation")}
              />
              <label
                htmlFor="kommunikation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Kommunikation
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="andet" {...register("check-andet")} />
              <label
                htmlFor="andet"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Andet
              </label>
            </div>
          </fieldset>
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
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </>
  );
}
