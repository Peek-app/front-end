import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "sonner";

import { createAccountUser } from "@/services/users/createUser";
import { createAccountVet } from "@/services/vets/createVet";

import PrimaryButton from "@/components/PrimaryButton";

export default function Login() {
  const router = useRouter();
  const [isVet, setIsvet] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  function handleAcceptTerms() {
    setAcceptTerms((prev) => !prev);
  }

  function handleCheckbox() {
    setIsvet(!isVet);
  }

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const user = await createAccountUser("/users", {
        email: data.email,
        password: data.password,
      });
      if (user) {
        toast.success("Cuenta creada con éxito 🎉");
        router.push("/login");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);
      setIsSubmitting(false);
    }
  }

  async function onSubmitVet(data) {
    try {
      setIsSubmitting(true);
      const user = await createAccountVet("/vets", {
        email: data.email,
        password: data.password,
        professionalId: data.professionalId,
      });
      if (user) {
        toast.success("Cuenta creada con éxito 🎉");
        router.push("/login");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mt-10 mb-12 max-w-[544px] p-4 sm:p-[0px] flex justify-center flex-col items-center mx-auto pt-9 font-roboto">
      <h2 className="text-[#ffffff] text-[2rem] mb-4">Crea una cuenta</h2>
      <form
        onSubmit={handleSubmit(isVet ? onSubmitVet : onSubmit)}
        className="w-full flex flex-col gap-4 mt-4"
      >
        <label className="text-[#ffffff] text-[16px]">Email</label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Ingresa tu correo electrónico",
            },
          })}
          placeholder="adrian@mail.com"
          type="text"
          className="bg-white p-[8px] h-[44px] rounded-[8px] border border-[#B3B3B3] focus:border-[#ffffff] text-[#B3B3B3] text-[16px]"
        ></input>
        {errors.email && (
          <span className="text-[14px]">{errors.email.message}</span>
        )}
        <label className="text-[#ffffff] text-[16px]">Contraseña</label>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Ingresa una contraseña",
            },
          })}
          placeholder="Crea una contraseña"
          className="bg-white p-[8px] h-[44px] rounded-[8px] border border-[#B3B3B3] focus:border-[#ffffff] text-[#B3B3B3] text-[16px]"
          type="password"
        />
        {errors.password && (
          <span className="text-[14px]">{errors.password.message}</span>
        )}
        <label className="text-[#ffffff] text-[16px]">
          Confirmar contraseña
        </label>
        <input
          {...register("passwordvalidate", {
            required: {
              value: true,
              message: "Confirmar cotraseña",
            },
            validate: (value) =>
              value === password || "La contraseña no coincide",
          })}
          placeholder="Confirma tu contraseña"
          className="bg-white p-[8px] h-[44px] rounded-[8px] border border-[#B3B3B3] focus:border-[#ffffff] text-[#B3B3B3] text-[16px]"
          type="password"
        />
        {errors.passwordvalidate && (
          <span className="text-[14px]">{errors.passwordvalidate.message}</span>
        )}
        <label className="text-[#ffffff] text-[16px] flex items-center">
          <span className="material-icons mr-2">
            {isVet ? "check_box" : "check_box_outline_blank"}
          </span>
          <input
            type="checkbox"
            checked={isVet}
            onChange={handleCheckbox}
            style={{ display: "none" }}
          />
          ¿Eres veterinario?
        </label>
        {isVet && (
          <>
            <label className="text-[#ffffff] text-[16px]">
              Registra tu Cédula profesional
            </label>
            <input
              {...register("professionalId", {
                required: {
                  value: true,
                  message: "Es ogligatorio ingresar tu cédula profesional",
                },
              })}
              placeholder="4046892"
              className="bg-white p-[8px] h-[44px] rounded-[8px] border border-[#B3B3B3] focus:border-[#0E2139] text-[#B3B3B3] text-[16px]"
              type="text"
            />
          </>
        )}
        {errors.professionalId && (
          <span className="text-[14px]">{errors.professionalId.message}</span>
        )}
        <label className="text-[#ffffff] text-[16px] flex items-center">
          <span className="material-icons mr-2">
            {acceptTerms ? "check_box" : "check_box_outline_blank"}
          </span>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={handleAcceptTerms}
            style={{ display: "none" }}
            {...register("terms", {
              required: {
                value: true,
                message: "Acepta los términos y condiciones",
              },
              onChange: () => handleAcceptTerms(),
            })}
          />
          Acepto los términos y condiciones
        </label>
        {errors.terms && (
          <span className="text-[14px]">{errors.terms.message}</span>
        )}
        <PrimaryButton label="Crear cuenta" isSubmitting={isSubmitting} />
        <div className="material-icons relative pt-[25px] h-[40px]">
          <>
            <hr className="w-2/3 mx-auto text-[#D1D5DC]"></hr>
            <span className="absolute top-[13px] mx-auto left-[8px] text-[#D1D5DC] right-0 text-center w-[35px]">
              {"motion_photos_on"}
            </span>
          </>
        </div>
        <p className="text-[#ffffff] text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link className="text-[#ffffff]" href="/login">
            Inicia Sesión
          </Link>
        </p>
      </form>
    </main>
  );
}