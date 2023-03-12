import { Textarea } from "@mui/joy";
import { IPropsSetTextMessage } from "../../interface";
import { recordProcessing } from "../../utils";
import "./inputMessage.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const InputMessage = (props: IPropsSetTextMessage) => {
  const { stateTextMessage, textMessage, setStateTextMessage, setTextMessage } =
    props.props;
  return (
    <div className="block-input-message">
      <p className="block-label-text">Сообщение:</p>
      <div className="block-main-text">
        <Textarea
          name="Neutral"
          variant="outlined"
          color="neutral"
          onChange={(e) =>
            recordProcessing(
              "MESSAGE",
              e.target.value,
              setTextMessage,
              setStateTextMessage
            )
          }
          placeholder="Текст сообщения"
          className="block-input-text"
          value={textMessage}
        />
        {stateTextMessage ? (
          <CheckCircleIcon color="success" />
        ) : (
          <ErrorIcon color="error" />
        )}
      </div>
    </div>
  );
};

export default InputMessage;
