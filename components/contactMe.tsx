"use client";
import { useCallback, useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  Box,
  FormControl,
  Snackbar,
  SnackbarCloseReason,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useEnqueueSnackbar } from "../components/common/Alerter";
import { useLocale, useTranslations } from "next-intl";
import { LoadingButton } from "@mui/lab";
import { Link } from "@/lib/intl";
import { links } from "@/config";
import { FaLocationArrow } from "react-icons/fa6";
// import { ContactRoutePayload } from "@/app/api/contact/route";

type MailFieldsType = {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
};

export type SendMailOutput = { success?: boolean; response?: string } & {
  error: Record<string, string | undefined> | null;
} & { formatData?: MailFieldsType };

function ContactMe() {
  const t = useTranslations("ContactMe");
  const touch = useTranslations("Navbar");

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<MailFieldsType>({
    defaultValues: {
      subject: t("default.subject"), //"Work Offer",
      message: t("default.message"), //"Need to collaborate",
      email: t("default.email"), //"hamza@gmail.com",
      name: t("default.name"), //""
    },
  });

  const locale = useLocale();
  // const { sendMail } = useSendmailHook();

  const [sendEmailResponse, setSendEmailResponse] = useState<SendMailOutput>({
    success: false,
    response: "",
    error: null,
  });
  const [emailSending, setEmailSending] = useState(false);
  const { showEnqueueSnackbar } = useEnqueueSnackbar();

  const handleCloseErrorAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSendEmailResponse((prevState: SendMailOutput) => {
      return { ...prevState, error: null };
    });
  };

  // const handleOldContactSubmit = useCallback(
  //   async (formatData: MailFieldsType) => {
  //     const emailContent = `Hi, my name is ${formatData.name}, ${formatData.message} ${formatData.email}`;
  //     window.location.href = `mailto:hamza.missaoui47@gmail.com?subject=${formatData.subject}&body=${emailContent}`;
  //   },
  //   [],
  // );

  const handleContactMeSubmit: SubmitHandler<MailFieldsType> = useCallback(
    async (formatData: any) => {
      setEmailSending(true);
      // const { response, success, error } = await sendMail(formatData);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(formatData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Authorization: `Bearer ${process.env.MAIL_PASSWORD}`,
          },
        });
        const data = await response.json();

        console.log("nodemailer data ", JSON.stringify(data));

        if (data.response && response.ok) {
          showEnqueueSnackbar(
            `Send email successfully, response ${data.response}, details: email: ${formatData.email}, message: ${formatData.message}, name: ${formatData.name}, subject: ${formatData.subject}`,
            {
              autoHideDuration: 6000,
              variant: "success",
              anchorOrigin: { horizontal: "center", vertical: "top" },
            }
          );
          setSendEmailResponse({
            success: true,
            response: data.response,
            error: null,
          });
        }
      } catch (error: any) {
        showEnqueueSnackbar(
          `Error while sending email, error: ${error?.message}`,
          {
            autoHideDuration: 6000,
            variant: "error",
          }
        );
        setSendEmailResponse({
          // success: false,
          response: undefined,
          error: { message: error?.message, name: error?.name },
        });
      }

      setEmailSending(false);
    },
    [showEnqueueSnackbar]
  );

  return (
    <div
      className={
        // "flex min-h-screen h-screen relative flex-col text-center md:text-left md:flex-row md:flex-row max-w-7xl px-10
        "relative flex h-full snap-start flex-col items-center shadow shadow-slate-300" +
        " mx-auto max-w-7xl justify-evenly"
      }
    >
      {/*"absolute top-24"*/}

      <h3
        className={`text-center text-gray-500 ${locale !== "ar" && "tracking uppercase tracking-[20px]"} text-2xl font-bold`}
      >
        {t("title")}
      </h3>

      <div className={"relative flex flex-col space-y-10"}>
        <h4
          className={
            "text-center text-xl font-semibold text-slate-700 decoration-[#F7AB0A]/50"
          }
        >
          {/*<span className={"decoration-[#F7AB0A]/50 underline"}>*/}
          {t("contact")}
        </h4>

        <div className={"items-center"}>
          <Box className={"flex items-center justify-center space-x-5"}>
            <PhoneIcon className={"h-7 w-7 animate-pulse text-[#F7AB0A]"} />
            <Typography
              fontSize={"medium"}
              // color={"text.color.secondary"}
              className={"text-md color-gray-500"}
            >
              (+216) 56521184
            </Typography>
          </Box>

          <Box className={"flex items-center justify-center space-x-5"}>
            <EnvelopeIcon className={"h-7 w-7 animate-pulse text-[#F7AB0A]"} />
            <Typography>hamza.missaoui@b2b-alive.com</Typography>
          </Box>

          <Box className={"flex items-center justify-center space-x-5"}>
            <MapPinIcon className={"h-7 w-7 animate-pulse text-[#F7AB0A]"} />
            <Typography>{t("address")}</Typography>
          </Box>
        </div>

        {/*<Stack component={"form"}*/}
        <form
          onSubmit={handleSubmit(handleContactMeSubmit)}
          className={
            // bg-darkBackground dark:bg-gray-100
            "flex w-full flex-1 flex-col space-y-2 self-center p-2"
          }
        >
          {/*<div className={"flex w-full flex-grow justify-center space-x-2"}>*/}
          <FormControl error={!!errors.name}>
            <TextField
              placeholder={t("default.name")}
              className={"text-blue-800 bg-lightBackground"}
              type={"text"}
              {...register("name")}
              required
            />
          </FormControl>
          <FormControl error={!!errors.email}>
            <TextField
              placeholder={t("default.email")}
              className={"text-blue-800 bg-lightBackground"}
              type={"text"}
              {...register("email")}
              required
            />
          </FormControl>
          {/*</div>*/}
          <FormControl error={!!errors.subject}>
            <TextField
              placeholder={t("default.subject")}
              className={"text-blue-800 bg-lightBackground"}
              type={"text"}
              {...register("subject")}
              required
            />
          </FormControl>
          {/*<FormControl error={!!errors.message}>*/}
          <TextareaAutosize
            placeholder={t("default.message")}
            className={"h-[150px] bg-white p-2 dark:bg-gray-900"}
            {...register("message")}
            required={false}
          />
          {/*</FormControl>*/}

          <div className={"flex items-center justify-center space-x-3"}>
            <LoadingButton
              color={"primary"}
              size={"small"}
              className={"w-fit self-center rounded-md px-0 text-lg uppercase"}
              disabled={!isValid}
              loading={emailSending}
              type={"submit"}
              variant={"contained"}
            >
              <p>{t("send")}</p>
              <FaLocationArrow />
            </LoadingButton>

            <div>
              <Link
                href={`mailto:${links.ownerEmail}`}
                target="_blank"
                rel="noreferrer noopener"
                // className={"self-end"}
              >
                <p className={"flex self-start"}>{touch("getInTouch")}</p>
                {/*<MagicButton*/}
                {/*  title={touch("getInTouch")}//"Let's get in touch"*/}
                {/*  icon={<FaLocationArrow />}*/}
                {/*  // position="right"*/}
                {/*  asChild*/}
                {/*/>*/}
              </Link>
            </div>
          </div>
        </form>
        {/*NEW*/}
      </div>
      {/*Alert error*/}
      <Snackbar
        open={!!sendEmailResponse?.error?.message}
        autoHideDuration={6000}
        onClose={() => handleCloseErrorAlert()}
      >
        <Alert
          onClose={() => handleCloseErrorAlert()}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {sendEmailResponse.error?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactMe;
