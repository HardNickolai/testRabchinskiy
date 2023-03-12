import { Button, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { apiRequestFile, apiRequestMessage } from "../../api";
import { THEME } from "../../constants";
import { IMessageRequest } from "../../interface";
import {
  validationCheckTextMessage,
  validationCheckTextName,
  validationCheckTextPhone,
} from "../../utils";
import InputMessage from "../InputMessage";
import InputName from "../InputName";
import InputPhone from "../InputPhone";
import Alert from "@mui/material/Alert";
import "./feedBack.css";

const Feedback = () => {
  const [textPhone, setTextPhone] = useState("");
  const [stateTextPhone, setStateTextPhone] = useState(false);
  const [textName, setTextName] = useState("");
  const [stateTextName, setStateTextName] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [stateTextMessage, setStateTextMessage] = useState(false);
  const [stateAlertOk, setStateAlertOk] = useState(false);
  const [stateAlertError, setStateAlertError] = useState(false);
  const [stateButtonLoad, setStateButtonLoad] = useState(false);

  const propsSetTextPhone = {
    stateTextPhone,
    textPhone,
    setStateTextPhone,
    setTextPhone,
  };

  const propsSetTextName = {
    stateTextName,
    textName,
    setStateTextName,
    setTextName,
  };

  const propsSetTextMessage = {
    stateTextMessage,
    textMessage,
    setStateTextMessage,
    setTextMessage,
  };

  const clearForm = () => {
    setTextPhone("");
    setTextName("");
    setTextMessage("");
    setStateTextPhone(false);
    setStateTextName(false);
    setStateTextMessage(false);
  };

  const activeAlertOk = () => {
    setStateAlertOk(true);
    setStateButtonLoad(true);
    clearForm();
    setTimeout(() => {
      setStateAlertOk(false);
    }, 3000);
  };

  const activeAlertError = () => {
    setStateAlertError(true);
    setTimeout(() => {
      setStateAlertError(false);
    }, 3000);
  };

  const sendingMessage = async (
    textInputPhone: string,
    textInputName: string,
    textInputMessage: string
  ) => {
    if (
      validationCheckTextPhone(textInputPhone) &&
      validationCheckTextName(textInputName) &&
      validationCheckTextMessage(textInputMessage)
    ) {
      const phone = validationCheckTextPhone(textInputPhone);
      const name = validationCheckTextName(textInputName);
      const textMessage = validationCheckTextMessage(textInputMessage);

      if (!phone || !name || !textMessage) return;

      try {
        const message: IMessageRequest = {
          phone,
          name,
          textMessage,
        };

        const res = await apiRequestMessage("POST", message);

        if (res.status === 200) {
          await apiRequestFile("POST", message);
          activeAlertOk();
          return;
        } else {
          throw new Error();
        }
      } catch (err) {
        activeAlertError();
        console.log(err);
      }
    } else {
      activeAlertError();
    }
  };

  const getFile = async () => {
    const file = await apiRequestFile("GET");
    return file;
  };

  return (
    <div className="">
      <div className="block-main">
        <div>
          {stateAlertOk && (
            <Alert severity="success">Сообщение успешно отправлено!</Alert>
          )}
          {stateAlertError && (
            <Alert severity="error">Ошибка отправления данных!</Alert>
          )}
          {stateButtonLoad && (
            <ThemeProvider theme={THEME}>
              <Button variant="contained" color="info" onClick={getFile}>
                Скачать файл
              </Button>
            </ThemeProvider>
          )}
        </div>
        <div className="block-main-inner">
          <InputPhone props={propsSetTextPhone} />
          <InputName props={propsSetTextName} />
          <InputMessage props={propsSetTextMessage} />
          <ThemeProvider theme={THEME}>
            <Button
              variant="contained"
              color="info"
              onClick={() => sendingMessage(textPhone, textName, textMessage)}
            >
              Отправить
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
