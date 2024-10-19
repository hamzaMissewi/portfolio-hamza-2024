"use client";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  ClickAwayListener,
  Divider,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ErrorIcon from "@mui/icons-material/Error";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useAskChatGptHook } from "@/hooks/useAskOpenAi4o";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useLocale } from "use-intl";

function ChatBot() {
  const t = useTranslations("Chatbot");
  const { askChatGpt } = useAskChatGptHook();
  const [userMessage, setUserMessage] = useState<string | undefined>(undefined);
  const [chatLoading, setChatLoading] = useState(false);
  const [responses, setResponses] = useState<
    { role: string; content: string }[]
  >([]);
  const [chatError, setChatError] = useState<string | undefined>(undefined);
  const [expandChatBox, setExpandChatBox] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const locale = useLocale();

  const handleClickAskChatGpt = useCallback(
    async (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setChatLoading(true);
      try {
        if (!userMessage) {
          enqueueSnackbar("ask chat gpt", {
            variant: "error",
            autoHideDuration: 5000,
          });
          return;
        }
        const result = await askChatGpt(userMessage);
        // console.log("chat result ", result);

        if (result?.reply) {
          setResponses([
            ...responses,
            { role: "user", content: userMessage },
            {
              role: "assistant",
              content: result.reply,
            },
          ]);
          enqueueSnackbar("open ai successfully", {
            variant: "info",
            autoHideDuration: 5000,
          });
        } else if (result?.error) {
          setChatError(result.error);
        }
      } finally {
        setChatLoading(false);
        setUserMessage("");
        setExpandChatBox(true);
      }
    },
    [askChatGpt, userMessage, responses]
  );

  // TODO TEXT TO SPEESH
  const handleClickTextToAiVoice = useCallback((aiText: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(aiText);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("SpeechSynthesis API is not supported in this browser.");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ x: -10, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`fixed bottom-2 z-10 w-fit ${locale === "ar" ? "left-2" : "right-2"} rounded-lg border-2 border-amber-400 bg-chatbotLight dark:bg-dark4`}
    >
      <div
        className={
          "dark:bg-chatbot-light bg-chatbot-dark flex items-center space-x-2 px-2"
        }
        onClick={() => setExpandChatBox((value) => !value)}
      >
        <Typography
          component={"h1"}
          className="text-center text-xl font-bold lowercase"
        >
          {t("title")}
        </Typography>
        <KeyboardArrowDownIcon fontSize={"small"} />
      </div>
      <Divider />

      {expandChatBox && (
        <ClickAwayListener onClickAway={() => setExpandChatBox(false)}>
          <motion.div
            initial={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={
              "dark:bg-chatbot-dark bg-chatbot-light flex flex-1 flex-col justify-between"
            }
          >
            <div className="h-[400px] flex-grow overflow-y-auto rounded-lg p-2 shadow-lg">
              <div className="space-y-4">
                {responses.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-slate-500"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <IconButton
                        onClick={() => handleClickTextToAiVoice(msg.content)}
                      >
                        <PlayArrowIcon fontSize={"small"} />
                      </IconButton>
                    </div>
                    {chatError && (
                      <Snackbar autoHideDuration={5000} open={!!chatError}>
                        <Alert
                          icon={<ErrorIcon fontSize="inherit" />}
                          severity="error"
                        >
                          {chatError}
                        </Alert>
                      </Snackbar>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Box
              component={"form"}
              className={
                "focus:ring-blue-500 flex w-[100%] flex-row items-center space-x-1 space-x-2 px-2 py-2  text-white-100"
              }
            >
              {/*<TextField*/}
              <input
                className="flex-1 rounded-md p-2 text-white focus:outline-none"
                // type={"text"}
                // size={"small"}
                placeholder={t("typeMessage")}
                value={userMessage}
                onChange={(event) => setUserMessage(event.target.value)}
                // sx={{ textColor: theme === "light" ? "white" : "#6a1378" }}
              />

              <Button
                type={"submit"}
                className="focus:ring-blue-500 w-fit items-center space-x-1 bg-darkBackground px-2 py-1 focus:outline-none focus:ring-2 dark:bg-lightBackground"
                onSubmit={(event) => handleClickAskChatGpt(event)}
              >
                <span>{t("send")}</span>
                <SendIcon fontSize={"small"} color={"primary"} />
              </Button>
            </Box>
          </motion.div>
        </ClickAwayListener>
      )}
      {chatLoading && (
        <CircularProgress variant={"indeterminate"} color={"error"} size={10} />
      )}
    </motion.div>

    // <Stack
    //     spacing={1}
    //     // className={"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}
    // >
    //     <Typography component={"h4"} className={"text-4xl font-semibold text-center"}>
    //         Hi I am your ai bot
    //         <span className={"decoration-[#F7AB0A]/50 underline"}>
    //                      how can i help you ?
    //                 </span>
    //     </Typography>
    //
    //     <Box
    //         className={"max-h-[400px] overflow-y-scroll border-1 border-amber-100 p-[10px] mb-[10px]"}
    //     >
    //         {responses.map((msg, index) => (
    //             <Box key={index} style={{margin: '5px 0', textAlign: msg.role === 'user' ? 'right' : 'left'}}>
    //                 <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong>
    //                 <Typography variant={"body2"} color={"#c3c3c3"}>
    //                     {msg.content}
    //                 </Typography>
    //
    //                 {chatError &&
    //                     <Snackbar autoHideDuration={5000} open={!!chatError}>
    //                         <Alert icon={<ErrorIcon fontSize="inherit"/>} severity="error">
    //                             {chatError}
    //                         </Alert>
    //                     </Snackbar>
    //                     }
    //
    //                 </Box>
    //             ))}
    //         </Box>
    //         <Stack component={"form"} spacing={1}>
    //             <FormControl>
    //                 <TextField
    //                     className={"text-xl w-[calc(100%-110px)] mr-2"}
    //                     type={"text"} placeholder={"ask anything..."}
    //                     onChange={(event) => setUserMessage(event.target.value)} value={userMessage}/>
    //             </FormControl>
    //             <IconButton type={"submit"} onClick={() => handleClickAskChatGpt()}>
    //                 <SendIcon fontSize={"small"} color={"primary"}/>
    //             </IconButton>
    //         </Stack>
    //
    //         {chatLoading && <CircularProgress variant={"indeterminate"} color={"error"} size={10}/>}
    //         {/*<Snackbar open={!!sendingError} autoHideDuration={6000} onClose={() => handleCloseErrorAlert()}>*/}
    //         {/*  */}
    //         {/*</Snackbar>*/}
    //     </Stack>
  );
}

export default ChatBot;
