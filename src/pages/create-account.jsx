import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { createUser } from "@/pages/api/services/users/User";
import clsx from "clsx";

import PrimaryButton from "@/components/PrimaryButton";
import { MdOutlinePersonAddAlt } from "react-icons/md";

export default function Login() {
  const router = useRouter();
  const [isVet, setIsvet] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  function handleCheckbox() {
    setIsvet(!isVet);
  }

  function handleAcceptTerms() {
    setAcceptTerms((prev) => !prev);
  }

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const user = await createUser({
        name: data.name,
        lastName: data.lastname,
        email: data.email,
        password: data.password,
      });
      if (user) {
        toast.success("Cuenta creada con éxito 🎉");
        router.push("/login");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error al crear cuenta:", error.message || error);
      toast.error(
        `Error al crear cuenta: ${error.message || "Error desconocido"}`
      );
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white  sm:pt-[70px]  pt-[0px]  pb-[100px]">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-96 ">
          <MdOutlinePersonAddAlt className="text-8xl m-auto text-congress-950" />
          <h2 className="text-congress-950 text-2xl text-center mb-4">
            Crea una cuenta
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 mt-4"
          >
            <label className="w-full text-left text-congress-950">Nombre</label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Ingresa tu nombre",
                },
              })}
              placeholder="Ej: Adrián"
              type="text"
              className={clsx(
                "w-full rounded-md border border-gray-200 p-2 text-congress-950",
                {
                  "bg-red-500/10 border-red-500": errors.name,
                }
              )}
            ></input>
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
            <label className="w-full text-left text-congress-950">
              Apellido
            </label>
            <input
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Ingresa tu apellido",
                },
              })}
              placeholder="Ej: Morales"
              type="text"
              className={clsx(
                "w-full rounded-md border border-gray-200 p-2 text-congress-950",
                {
                  "bg-red-500/10 border-red-500": errors.lastname,
                }
              )}
            ></input>
            {errors.lastname && (
              <span className="text-red-500">{errors.lastname.message}</span>
            )}
            <label className="w-full text-left text-congress-950">Email</label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Ingresa tu correo electrónico",
                },
              })}
              placeholder="adrian@mail.com"
              type="text"
              className={clsx(
                "w-full rounded-md border border-gray-200 p-2 text-congress-950",
                {
                  "bg-red-500/10 border-red-500": errors.email,
                }
              )}
            ></input>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <div className="relative flex flex-col">
              <label className="w-full text-left text-congress-950">
                Contraseña
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Ingresa una contraseña",
                  },
                })}
                placeholder="Crea una contraseña"
                className={clsx(
                  "w-full rounded-md border border-gray-200 p-2 text-congress-950",
                  {
                    "bg-red-500/10 border-red-500": errors.password,
                  }
                )}
                type={showPassword ? "text" : "password"}
              />
              <button
                className="absolute right-2 top-9"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-icons text-gray-300">
                  {showPassword ? "svisibility" : "visibility_off"}
                </span>
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <div className="relative flex flex-col">
              <label className="w-full text-left text-congress-950">
                Confirmar contraseña
              </label>
              <input
                {...register("passwordvalidate", {
                  required: {
                    value: true,
                    message: "Confirmar contraseña",
                  },
                  validate: (value) =>
                    value === password || "La contraseña no coincide",
                })}
                placeholder="Confirma tu contraseña"
                className={clsx(
                  "w-full rounded-md border border-gray-200 p-2 text-congress-950",
                  {
                    "bg-red-500/10 border-red-500": errors.passwordvalidate,
                  }
                )}
                type={showConfirmPassword ? "text" : "password"}
              />
              <button
                className="absolute right-2 top-9"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <span className="material-icons text-gray-300">
                  {showConfirmPassword ? "visibility" : "visibility_off"}
                </span>
              </button>
            </div>
            {errors.passwordvalidate && (
              <span className="text-red-500">
                {errors.passwordvalidate.message}
              </span>
            )}
            <label className="w-full text-left text-congress-950 flex items-center">
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
                <label className="w-full text-left text-congress-950">
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
              <span className="text-[14px]">
                {errors.professionalId.message}
              </span>
            )}
            <label className="w-full text-left text-congress-950 flex items-center">
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
              <span className="text-red-500">{errors.terms.message}</span>
            )}
            <PrimaryButton label="Crear cuenta" isSubmitting={isSubmitting} />
            <div className="material-icons relative pt-[25px] h-[40px]">
              <>
                <hr className="w-2/3 mx-auto text-[#D1D5DC]"></hr>
                <span className="absolute top-[13px] mx-auto left-[8px] text-[#D1D5DC] right-0 text-center bg-white w-[35px]">
                  {"motion_photos_on"}
                </span>
              </>
            </div>
            <p className="w-full text-congress-950 text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link className="text-congress-300" href="/login">
                Inicia Sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
